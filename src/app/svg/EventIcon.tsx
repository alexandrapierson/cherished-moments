import { SVGProps } from './svgProps'

const EventIcon: React.FC<SVGProps> = ({
  color = '#1a1a1e',
  width = '100',
  height = '100',
  className = '',
  alt = 'Event planning service.'
}) => {
  return (
    <svg
      className={className}
      role='img'
      aria-label={alt}
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid meet'
    >
      <path
        d='M44.3412 11.0499L41.5428 14.5476C40.8609 15.4217 41.5153 16.9275 43.1856 18.7737M44.3412 11.0499C43.8518 11.6772 44.0507 12.6298 44.8194 13.8002C44.9737 14.0351 45.151 14.2789 45.3504 14.5306M44.3412 11.0499C45.0114 10.1907 46.8753 10.067 49.5056 10.5594M81.9364 31.449L79.1577 34.922C78.4061 35.8854 76.1536 35.9241 73.0026 35.2063M81.9364 31.449L81.9561 31.4243M81.9364 31.449C81.9431 31.4408 81.9496 31.4326 81.9561 31.4243M81.9364 31.449C81.43 32.0662 80.2889 32.2917 78.6794 32.1718C78.1137 32.1297 77.4901 32.0448 76.8159 31.9194M81.9561 31.4243C82.7066 30.4623 81.8381 28.7347 79.7779 26.6304M49.5056 10.5594C52.7634 8.3349 56.9297 7 61.4702 7C71.9025 7 80.3595 14.0469 80.3595 22.7396C80.3595 24.0825 80.1577 25.386 79.7779 26.6304M49.5056 10.5594C47.8685 11.6773 46.4608 13.0198 45.3504 14.5306M79.7779 26.6304C79.1889 28.5606 78.1719 30.3483 76.8159 31.9194M43.1856 18.7737C42.791 20.0407 42.5809 21.3697 42.5809 22.7396C42.5809 24.5793 42.9597 26.3452 43.6558 27.9862M43.1856 18.7737C45.7897 21.6519 50.8627 25.3571 57.1908 28.7847C63.1039 31.9876 68.838 34.2576 73.0026 35.2063M45.3504 14.5306C47.6982 17.4948 53.1 21.5554 59.9892 25.287C66.3987 28.7588 72.598 31.1345 76.8159 31.9194M73.0026 35.2063C69.8122 37.2585 65.8123 38.4793 61.4702 38.4793C53.2457 38.4793 46.2489 34.0994 43.6558 27.9862M43.6558 27.9862L9 74.6221C9.90185 76.0764 10.7636 77.24 11.7984 78.1566M59.3714 38.4793L54.4742 43.9957M45.3793 39.6452C47.791 42.2028 49.7111 43.2101 54.4742 43.9957M54.4742 43.9957L21.5928 81.0346C19.5889 80.9466 17.9519 80.7593 16.5785 80.4516M11.7984 78.1566L9.6996 80.4516C9.6996 80.4516 9.86016 82.7048 11.0988 83.3664M11.7984 78.1566C13.0281 79.2459 14.5023 79.9864 16.5785 80.4516M16.5785 80.4516L14.5968 83.3664C14.5968 83.3664 12.2489 83.9807 11.0988 83.3664M11.0988 83.3664C8.68667 92.5268 16.5785 96.1912 25.7905 92.6936C35.0024 89.1959 51.6758 74.6221 51.6758 74.6221C51.6758 74.6221 68.4334 60.0484 83.8575 70.5415C99.2815 81.0346 88.0551 89.1959 88.0551 89.1959M31.3873 61.7972C31.3873 63.0851 30.1344 64.129 28.5889 64.129C27.0433 64.129 25.7905 63.0851 25.7905 61.7972C25.7905 60.5094 27.0433 59.4654 28.5889 59.4654C30.1344 59.4654 31.3873 60.5094 31.3873 61.7972ZM32.5538 54.6726L34.8868 55.9603C35.5311 56.3159 36.3993 56.169 36.826 55.6322L43.0074 47.8561C43.4341 47.3193 43.2578 46.5959 42.6136 46.2403L40.2805 44.9526C39.6363 44.597 38.7681 44.7439 38.3414 45.2808L32.16 53.0568C31.7332 53.5936 31.9095 54.3171 32.5538 54.6726Z'
        stroke={color}
      />
    </svg>
  )
}

export default EventIcon
