const logos = [
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1ISvCUzqpYLLFRXGT9y468GCKhpY2Cbmnu4mnzhaTwR9kV8As1Y6dn5iqJ2mtfANljufQKPTK_VTM3FU2bycDicRxOkkoU1ckS0120WLJmZHTqQCcixL5hJF7I_KVBZSsgNf7pDoIsxd3r3mFuZb4irWcFyFhA7-cPrbquKUdfR2V4OxCwEZo0c_P8VGkoF_mvWOaF0TWohI2_Bfzi7q0YPWThx9gf3KhhqeERf_GHTChtks7r0h4fvmWogd9gVkK2qf0IL56eTW4', alt: 'Tech enterprise partner logo' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQS5JnyWWLHpOuUTSRZWvmCDXmhn2GpW40j_T40OtR_qYBuAVGvkALL1IiyShdezvDwyRaJRoz_ubb2L-HStH72dtS0iMwWDEJpm1jU1Jh7i8BJpX7gHBRZ-gVlxmY1OL7KzTrGhhYD48I9EIv-cmYAKB4g0kT9NkdD06t6CMTGKw067aKHaS6by_eB7XvBp_0bthHgg0sKbDvCaBUI-61XSEEVIhtRGZIpF8vc6S21nIfFevQhBI4mDct-9Y0YFC_AFTe0DHFtKN8', alt: 'Global logistics partner logo' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKburwh4ribOrG0Ks9JO35LrT2aioanuhMVyM6-__SfVOlp_PyoMBEWXUqytx1mQxrFNlE_kMxdpdouaxnimFc4nj00Rh520QVT53REz0MeItseUF617hszc1GfZFcRWypeH75lWt1iTV7HUMv1qSUv2cBYe7gMfds-h1t8EOpM0ZCKIYx_-glJBlLxEwY5TOi8_ENN8CPH3eFsT3TtdDDLDIA8A09H_3ex3J5F-lyW6M5LEc5T666yDdavoms9oH7AGdc0t7_DrBv', alt: 'Financial services partner logo' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZzCCSGHxKucPwJPmgi4bZ6sEkLZ4JlryUR3Vwl4ltYkc4O2aAXEBp5SJJ3E7Al3tN-400XelUMdhlS7uYwtWp39jmecU9EfAbGpuuCJz_E8-JwzJy_8KC9PreT2n2GX_VXir5qJJSpZ-W7-I974T4jRMg8SBskjQ9t24Agp1UZiwnRyZhqetKnGbp9pHh_GOg1n1OUjqYxl3kFc1a9rD2ToEM3t04ZbxoQOOFGsCMBOx9pkB73VgYuUl_OzDZeymtO_tskZrbE9A', alt: 'Education group partner logo' },
];

export default function SocialProof() {
  return (
    <section className="py-10 sm:py-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <p className="text-center font-label text-xs uppercase tracking-widest text-outline mb-6 sm:mb-8">
          Trusted by 500+ Organizations Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-20 grayscale opacity-60">
          {logos.map((logo) => (
            <img key={logo.alt} className="h-6 sm:h-8" alt={logo.alt} src={logo.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
