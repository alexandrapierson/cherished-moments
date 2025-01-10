import { SVGProps } from './svgProps'

const BulletPoint: React.FC<SVGProps> = ({
  fill = '#666675',
  width = '16',
  stroke = '#4C4C57',
  height = '16',
  className = '',
  alt = ''
}) => {
  return (
    <svg
      className={className}
      role='img'
      aria-label={alt}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.00667 3.34399C6.00667 1.96318 7.12595 0.843994 8.50667 0.843994C9.88738 0.843994 11.0067 1.96318 11.0067 3.34399L10.0067 6.34439L10.194 6.49988L12.8774 4.57117C14.1985 4.16953 15.5948 4.91489 15.9964 6.2359C16.398 7.55692 15.6528 8.95334 14.3317 9.35498L10.8593 9.19183L10.8068 9.32504L13.5059 11.196C14.3121 12.317 14.0569 13.8791 12.936 14.6853C11.815 15.4914 10.2529 15.2363 9.44666 14.1153L8.50668 10.844L8.06633 10.8053L7.02399 13.8571C6.18594 14.9545 4.61711 15.1647 3.51978 14.3267C2.42244 13.4887 2.21214 11.9199 3.05018 10.8225L6.05966 8.85841L6.02305 8.63166H2.53037C1.23491 8.15372 0.572336 6.71623 1.05025 5.42086C1.52816 4.1255 2.96559 3.46279 4.26105 3.94074L6.89299 6.43507L7.00668 6.34439L6.00667 3.34399Z'
        fill={fill}
        stroke={stroke}
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default BulletPoint
