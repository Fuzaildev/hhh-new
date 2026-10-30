import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-[31px] font-extrabold leading-[1.05] tracking-[-1.3px] max-[480px]:gap-2 max-[360px]:gap-1.5"
      aria-label="Happy Healthy Hospital home"
    >
      <img
        className="h-12 w-12 shrink-0 rounded object-cover max-[480px]:h-[38px] max-[480px]:w-[38px] max-[360px]:h-[34px] max-[360px]:w-[34px]"
        src="/images/hhh-logo.png"
        alt=""
      />
      <span className="block font-extrabold leading-[1.05] max-[480px]:text-[22px] max-[480px]:tracking-[-0.9px] max-[360px]:text-[19px] max-[360px]:tracking-[-0.8px]">
        Happy
        <span className="font-medium"> Healthy</span>
        <small className="mt-1.5 block font-sans text-[13px] font-normal tracking-[2px] max-[480px]:text-[13px]">
          HOSPITAL
        </small>
      </span>
    </Link>
  );
}
