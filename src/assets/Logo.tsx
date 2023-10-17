import { ReactElement } from 'react'

interface LogoProps {
  className?: string
}

// eslint-disable-next-line max-lines-per-function
export default function Logo({ className }: LogoProps): ReactElement {
  return (
    <svg
      width="72"
      height="68"
      viewBox="0 0 72 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="72" height="68" rx="34" fill="#111827" />
      <path
        d="M44.1565 15.6231H45.8154C47.1853 15.6231 48.4331 16.4543 49.0179 17.7582L53.998 28.8643C54.2212 29.3624 54.3374 29.9063 54.3374 30.457V40.8249C54.3374 42.3681 53.148 43.6187 51.6819 43.6187H20.0503C18.5841 43.6187 17.3955 42.3681 17.3955 40.8249V30.4555C17.3955 29.9063 17.5111 29.3632 17.7339 28.8658L22.7146 17.7582C23.2996 16.4543 24.5469 15.6231 25.9173 15.6231H44.1565Z"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M24.5432 43.6177V44.854C24.5432 46.3154 23.4176 47.5 22.0291 47.5H19.9094C18.5208 47.5 17.3955 46.3162 17.3955 44.8548V40.4855"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M47.1897 43.6177V44.8533C47.1897 46.3147 48.3156 47.5 49.7054 47.5H51.8211C53.2109 47.5 54.3376 46.3147 54.3376 44.8533V40.4855"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M18.2754 27.4678H17.1961C16.3635 27.4678 15.786 26.5945 16.0757 25.7731L16.4443 24.7295C16.6178 24.2374 17.0646 23.9103 17.5643 23.9103H19.8954"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M53.4298 27.4678H54.8046C55.6368 27.4678 56.2144 26.5945 55.9242 25.7731L55.5562 24.7295C55.3822 24.2374 54.9358 23.9103 54.436 23.9103H51.7249"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M54.1868 29.4027C49.7344 30.1372 43.1775 30.6016 35.866 30.6016C28.555 30.6016 21.9981 30.1372 17.5449 29.4027"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M24.6434 36.4532C24.6434 37.4652 23.8638 38.2852 22.9025 38.2852C21.9413 38.2852 21.1619 37.4652 21.1619 36.4532C21.1619 35.4426 21.9413 34.6226 22.9025 34.6226C23.8638 34.6226 24.6434 35.4426 24.6434 36.4532Z"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M50.5711 36.4532C50.5711 37.4652 49.7917 38.2852 48.8298 38.2852C47.8685 38.2852 47.0898 37.4652 47.0898 36.4532C47.0898 35.4426 47.8685 34.6226 48.8298 34.6226C49.7917 34.6226 50.5711 35.4426 50.5711 36.4532Z"
        stroke="#F9FAFB"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path d="M28.5769 35.2759H43.1555" stroke="#F9FAFB" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M28.5769 37.6499H43.1555" stroke="#F9FAFB" strokeWidth="1.5" strokeMiterlimit="10" />
    </svg>
  )
}
