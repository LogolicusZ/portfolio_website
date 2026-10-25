<script>
  import { inview } from '$lib/utils/inview';

  const disciplines = [
    {
      title: 'System Administration',
      text: 'My training is in IT system administration: Linux servers, virtualization, backups and monitoring, plus DevOps and CI/CD. I aim for systems that are reliable, automated and quiet.'
    },
    {
      title: 'Photography',
      text: 'I shoot landscape, street and product work as a freelancer. Landscapes take patience, street takes instinct, product takes precision.'
    },
    {
      title: 'Design',
      text: 'I design for the web and for physical products. Keyboards got me started and taught me CAD, and how to take a project from first sketch to finished product.'
    }
  ];

  const details = [
    {
      title: 'Toolkit',
      items: [
        'Linux, Bash, Python',
        'Docker, Kubernetes, Ansible',
        'Git, DevOps, CI/CD pipelines',
        'Figma, Fusion 360, Lightroom'
      ]
    }
  ];

  let scrollY = $state(0);
  let innerHeight = $state(0);
  const scrollProgress = $derived(
    scrollY > 0 ? Math.min(scrollY / (document.documentElement.scrollHeight - innerHeight), 1) : 0
  );
  const imageScale = $derived(1 - scrollProgress * 0.3);

  // Cap the image height so it fits on screen when the page opens.
  let innerWidth = $state(0);
  let image = $state();
  let imageMaxHeight = $state();
  $effect(() => {
    if (!innerWidth || !innerHeight) return;
    imageMaxHeight = innerHeight - (image.getBoundingClientRect().top + window.scrollY) - 32;
  });
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

<svelte:head>
  <title>About — logolicusz</title>
</svelte:head>

<section
  style:--image-max-h={imageMaxHeight && `${imageMaxHeight}px`}
  class="grid grid-cols-1 items-start pb-8 md:grid-cols-[43%_1fr] md:[--image-w:min(28vw,calc(var(--image-max-h,100vh)*0.75))]"
>
  <h1 class="sr-only">About Me</h1>

  <div class="flex justify-center md:sticky md:top-8 md:pt-[3vw]">
    <img
      src="/assets/img/about_image.avif"
      alt="Logolicusz standing outdoors, wearing a Baker's Soul t-shirt"
      width="2560"
      height="3413"
      bind:this={image}
      style:--image-scale={imageScale}
      class="aspect-3/4 w-[clamp(14rem,72vw,26rem)] origin-top object-cover md:w-(--image-w) md:scale-(--image-scale)"
    />
  </div>

  <div class="mt-[clamp(3rem,10vw,5rem)] flex flex-col gap-[clamp(4rem,12vw,9rem)] md:mt-0">
    <div class="md:flex md:min-h-[calc(var(--image-w)*4/3)] md:items-center md:pt-[3vw]">
      <p
        use:inview
        class="reveal text-[clamp(1.6rem,7.5vw,2.75rem)] leading-[1.1] tracking-tight text-pretty md:text-[clamp(1.75rem,3.2vw,3.25rem)]"
      >
        I’m Logolicus, a system administrator who also works as a freelance photographer and
        designs everything from websites to keyboards. I build infrastructure nobody has to think
        about, and I care most about <span class="text-accent-pink">making things work quietly</span>
        and look good doing it.
      </p>
    </div>

    <div class="flex flex-col gap-[clamp(3.5rem,8vw,6rem)] md:pl-[7vw]">
      {#each disciplines as discipline (discipline.title)}
        <div use:inview class="reveal space-y-[clamp(1rem,2vw,1.75rem)] even:ml-[15vw] md:even:ml-[10vw]">
          <h2 class="font-serif text-[clamp(2rem,9vw,3rem)] md:text-[clamp(2rem,3vw,3rem)] leading-none">{discipline.title}</h2>
          <p class="max-w-md text-base leading-snug sm:text-lg">
            {discipline.text}
            {#if discipline.title === 'Design'}
              My latest is <a href="/projects/juna">Juna</a>.
            {/if}
          </p>
        </div>
      {/each}

      {#each details as detail (detail.title)}
        <div use:inview class="reveal ml-[15vw] space-y-[clamp(0.75rem,1.5vw,1.25rem)] md:ml-[10vw]">
          <h2 class="font-serif text-[clamp(2rem,9vw,3rem)] md:text-[clamp(2rem,3vw,3rem)] leading-none">{detail.title}</h2>
          <ul class="text-base leading-snug text-neutral-500 sm:text-lg">
            {#each detail.items as item (item)}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
      {/each}

      <div use:inview class="reveal">
        <p class="text-base text-neutral-500 sm:text-lg">Think we’d work well together?</p>
        <a
          href="/contact/"
          class="pill unset-link mt-3 block w-fit text-[clamp(2rem,9vw,3rem)] md:text-[clamp(2rem,3vw,3rem)] leading-tight no-underline"
        >
          Get in touch
        </a>
      </div>
    </div>
  </div>
</section>
