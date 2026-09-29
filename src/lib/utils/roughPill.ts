function draw(canvas: HTMLCanvasElement) {
	const rect = canvas.getBoundingClientRect();
	if (rect.width < 2 || rect.height < 2) return;

	const dpr = Math.min(window.devicePixelRatio || 1, 2);
	const w = Math.ceil(rect.width * dpr);
	const h = Math.ceil(rect.height * dpr);
	if (canvas.width !== w) canvas.width = w;
	if (canvas.height !== h) canvas.height = h;

	const ctx = canvas.getContext('2d');
	if (!ctx) return;

	const jitter = Math.max(1, Math.round(h * 0.03));
	const step = Math.max(1, Math.round(dpr));
	const x = jitter;
	const y = jitter;
	const iw = w - 2 * jitter;
	const ih = h - 2 * jitter;
	const offset = () => (Math.random() > 0.1 ? 0 : Math.round((Math.random() * 2 - 1) * jitter));

	ctx.clearRect(0, 0, w, h);
	ctx.fillStyle = getComputedStyle(canvas).color;
	ctx.fillRect(x, y, iw, ih);

	for (let i = 0; i < iw; i += step) {
		const s = Math.min(step, iw - i);
		const top = offset();
		if (top > 0) ctx.fillRect(x + i, y - top, s, top);
		else if (top < 0) ctx.clearRect(x + i, y, s, -top);
		const bottom = offset();
		if (bottom > 0) ctx.fillRect(x + i, y + ih, s, bottom);
		else if (bottom < 0) ctx.clearRect(x + i, y + ih + bottom, s, -bottom);
	}

	for (let i = 0; i < ih; i += step) {
		const s = Math.min(step, ih - i);
		const left = offset();
		if (left > 0) ctx.fillRect(x - left, y + i, left, s);
		else if (left < 0) ctx.clearRect(x, y + i, -left, s);
		const right = offset();
		if (right > 0) ctx.fillRect(x + iw, y + i, right, s);
		else if (right < 0) ctx.clearRect(x + iw + right, y + i, -right, s);
	}
}

export function roughPill(node: HTMLElement) {
	const canvas = document.createElement('canvas');
	canvas.className = 'pill-canvas';
	canvas.setAttribute('aria-hidden', 'true');
	node.prepend(canvas);

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	let frame = 0;

	const flicker = () => {
		if (reduceMotion || frame) return;
		const start = performance.now();
		let count = 0;
		const tick = (now: number) => {
			if (++count % 5 === 0) draw(canvas);
			if (now - start >= 320) {
				draw(canvas);
				frame = 0;
				return;
			}
			frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
	};

	const resize = new ResizeObserver(() => draw(canvas));
	resize.observe(canvas);
	node.addEventListener('pointerenter', flicker);
	node.addEventListener('focusin', flicker);

	return {
		destroy() {
			cancelAnimationFrame(frame);
			resize.disconnect();
			node.removeEventListener('pointerenter', flicker);
			node.removeEventListener('focusin', flicker);
			canvas.remove();
		}
	};
}
