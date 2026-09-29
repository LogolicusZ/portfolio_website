<script>
  import { inview } from '$lib/utils/inview';

  const skillGroups = [
    {
      title: 'Coding / Sysadmin',
      items: ['Web Development', 'Docker', 'Linux Server', 'Git', 'Virtualization', 'Ansible', 'Kubernetes']
    },
    {
      title: 'Design',
      items: ['Figma (Software)', 'Fusion 360 (Software)', 'Lightroom (Software)']
    },
    {
      title: 'Hobbies & Interests',
      items: ['Mechanical Keyboards', 'Photography', 'Painting']
    }
  ];
</script>

<section class="mx-auto flex max-w-3xl flex-col items-center pb-8 text-center">
  <img
    src="/assets/img/about_image.avif"
    alt="Logolicusz standing outdoors, wearing a Baker's Soul t-shirt"
    width="2560"
    height="3413"
    class="aspect-4/5 w-full max-w-xs rounded-sm object-cover sm:max-w-sm"
  />

  <h1
    use:inview
    class="reveal mt-[clamp(2rem,5vw,3.5rem)] font-serif text-4xl tracking-tight sm:text-5xl"
  >
    About Me
  </h1>

  <div use:inview={100} class="reveal mt-6 space-y-4 text-base leading-relaxed text-pretty sm:text-lg">
    <p>
      At the moment, I’m in a 4-year-long apprenticeship at Adnovum, learning to be an IT System
      Administrator. On the side, I teach myself CAD designing, UI/UX design and programming.
    </p>

    <p>
      I enjoy creating stuff from backend infrastructure and deployment to front-end systems and
      design direction.
    </p>
  </div>

  <div class="mt-[clamp(3rem,7vw,4.5rem)] w-full space-y-10">
    {#each skillGroups as group, i}
      <div use:inview={i * 80} class="reveal">
        <h2 class="text-xs tracking-[0.2em] text-neutral-500 uppercase">
          {group.title}
        </h2>

        <ul class="mt-4 flex flex-wrap justify-center gap-2">
          {#each group.items as item}
            <li class="rounded-full border border-zinc-800/15 px-3.5 py-1.5 text-sm">
              {item}
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
