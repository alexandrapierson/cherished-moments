import { SVGProps } from './svgProps'

const TimelineIcon: React.FC<SVGProps> = ({
  color = '#1a1a1e',
  width = '100',
  height = '100',
  className = '',
  alt = 'Timeline planning service.'
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
        d='M10.1666 37.3175C8.28571 38.4426 7 40.714 7 43.3329C7 45.4701 7.85616 47.3758 9.19328 48.616M10.1666 37.3175C10.97 36.837 11.882 36.5656 12.8487 36.5656C16.0789 36.5656 18.6975 39.5954 18.6975 43.3329C18.6975 46.173 17.1855 48.6045 15.042 49.6084M10.1666 37.3175L55.9832 11.4919M55.9832 11.4919C53.8398 12.4958 52.3277 14.9273 52.3277 17.7674C52.3277 21.5049 54.9463 24.5347 58.1765 24.5347C59.2418 24.5347 60.2406 24.2052 61.1008 23.6294M55.9832 11.4919C56.6605 11.1747 57.4009 11 58.1765 11C61.4066 11 64.0252 14.0298 64.0252 17.7674C64.0252 20.2722 62.849 22.4593 61.1008 23.6294M15.042 49.6084C14.3647 49.9256 13.6244 50.1003 12.8487 50.1003C11.4656 50.1003 10.1946 49.5448 9.19328 48.616M15.042 49.6084L58.1765 25.2788M61.1008 23.6294L58.1765 25.2788M9.19328 48.616L36.8725 66.9037M58.1765 25.2788L94 44.0849L72.2244 59.7622M58.5223 64.5374C57.7068 64.2327 56.8582 64.2276 56.0995 64.4666M58.5223 64.5374C59.417 64.8717 60.114 65.5077 60.5354 66.2823M58.5223 64.5374L59.8042 60.9648M60.3657 66.0015L63.2293 62.4223C63.9062 60.5356 62.8963 58.4241 60.9737 57.7057C59.051 56.9873 56.9437 57.9341 56.2667 59.8207L56.1882 64.4406L56.0995 64.4666M60.9658 68.4465C60.9353 68.7171 60.8734 68.9878 60.7779 69.254C60.6281 69.6713 60.4084 70.0426 60.1362 70.3601M60.9658 68.4465L65.3725 68.5896M60.9658 68.4465C61.051 67.6917 60.8918 66.9374 60.5354 66.2823M58.3062 71.4934C57.5967 71.6761 56.8198 71.6489 56.0709 71.3691C56.0337 71.3552 55.9968 71.3407 55.9603 71.3258M58.3062 71.4934L59.1903 75.5199M58.3062 71.4934C58.9741 71.3215 59.5822 70.9638 60.051 70.4559M53.9601 69.4316L50.5218 71.3569M53.9601 69.4316C53.6581 68.7918 53.5382 68.0711 53.6409 67.3542M53.9601 69.4316C54.2798 70.109 54.8037 70.6957 55.4837 71.0912M53.6409 67.3542C53.6746 67.1189 53.7322 66.884 53.8153 66.6524C54.0032 66.1288 54.3013 65.6776 54.675 65.3143M53.6409 67.3542L48.8335 65.2367C47.2639 63.9097 47.046 61.6008 48.3466 60.0796C49.6472 58.5583 51.9737 58.4007 53.5433 59.7278L56.0995 64.4666M53.6409 67.3542L48.4832 68.5006C46.7782 69.564 46.3019 71.8169 47.4191 73.5329C48.164 74.677 49.4293 75.2935 50.6953 75.2621M56.0995 64.4666C55.5658 64.6348 55.0767 64.9238 54.675 65.3143M60.5354 66.2823L64.6348 65.2263M60.1362 70.3601C60.1083 70.3926 60.0799 70.4245 60.051 70.4559M60.1362 70.3601L64.9123 72.3654C66.9489 72.504 68.6713 70.9838 68.7597 68.9698C68.8481 66.9559 67.2691 65.211 65.2325 65.0724L64.6348 65.2263M60.051 70.4559L62.8598 74.4512C63.4328 76.4024 62.3115 78.404 60.3554 78.9222C58.3992 79.4404 56.349 78.2791 55.776 76.3279L55.9548 71.4755M55.9603 71.3258C55.794 71.2578 55.635 71.1792 55.4837 71.0912M55.9603 71.3258L55.9548 71.4755M55.4837 71.0912L54.0548 72.8434M54.675 65.3143L51.1478 61.8885M55.3883 68.0931L55.5033 69.0601M56.7252 69.5167L57.5398 69.821M55.2734 67.1261L55.9731 66.4635M56.9026 67.7349L57.5711 68.4467M56.9339 66.3605L57.7485 66.6649M58.5006 69.718L59.4615 69.615M36.7527 67.0137L35.317 63.8721C35.1473 62.3686 36.2041 61.0097 37.6774 60.8365C39.1506 60.6634 40.4824 61.7417 40.6521 63.2452L39.9538 66.6375M35.6427 69.7783L32.2574 70.0654C30.8164 69.7074 29.9328 68.2253 30.2836 66.7549C30.4573 66.0265 30.9014 65.4377 31.4806 65.0724M36.4048 66.5835L33.5277 64.7407C32.8005 64.5601 32.0705 64.7002 31.4806 65.0724M40.271 66.6623L42.7989 64.3468C44.1593 63.7438 45.7408 64.3803 46.3316 65.7683C46.9225 67.1563 46.2989 68.7703 44.9386 69.3732L41.5548 69.6781M41.3206 69.7863L44.2837 71.4813C44.4441 71.6613 44.5766 71.857 44.6815 72.0631M38.937 71.9988L40.3111 75.169C41.309 76.2885 43.0072 76.3704 44.1042 75.3521C45.0249 74.4974 45.2295 73.1394 44.6815 72.0631M38.4217 71.8056L37.6943 75.1916C36.9349 76.4916 35.2868 76.9171 34.0129 76.1423C32.7391 75.3674 32.3219 73.6856 33.0813 72.3856L35.6539 70.122M48.3414 78.3364C48.3414 78.3364 52.3927 77.8342 54.4912 79.059C58.2583 81.2575 57.411 90 57.411 90C57.411 90 48.8753 88.8551 47.6333 84.612C46.9414 82.2482 48.3414 78.3364 48.3414 78.3364ZM48.3414 78.3364L49.8576 80.2863M48.3414 78.3364L46.3316 76.1423M49.8576 80.2863L54.2939 80.8076M49.8576 80.2863L50.8018 81.5006M50.8018 81.5006L50.3718 85.3115M50.8018 81.5006L53.0173 84.3497M53.0173 84.3497L53.9835 86.8391M53.0173 84.3497L55.8486 84.6824M44.7255 79.4935L38.1481 83.3685M44.7255 79.4935C44.7255 79.4935 44.6697 81.6604 43.8915 82.6695C42.4947 84.4809 38.1481 83.3685 38.1481 83.3685M44.7255 79.4935C44.7255 79.4935 42.8585 78.4593 41.6131 78.6424C39.3773 78.9711 38.1481 83.3685 38.1481 83.3685M44.7255 79.4935L46.3316 76.1423M68.5277 62.8166L75.9736 61.2894M68.5277 62.8166C68.5277 62.8166 69.9729 64.4052 71.2104 64.6378C73.4319 65.0554 75.9736 61.2894 75.9736 61.2894M68.5277 62.8166L67.1481 63.4169M68.5277 62.8166C68.5277 62.8166 68.6099 62.5878 68.7589 62.2572M75.9736 61.2894C75.9736 61.2894 74.0232 60.0109 72.2244 59.7622M27.9993 64.3614L20.963 61.4444M27.9993 64.3614C27.9993 64.3614 26.2892 65.6473 25.0308 65.6404C22.7721 65.628 20.963 61.4444 20.963 61.4444M27.9993 64.3614C27.9993 64.3614 27.6525 62.2229 26.746 61.3323C25.1187 59.7337 20.963 61.4444 20.963 61.4444M27.9993 64.3614L31.4806 65.0724M46.3316 76.1423L45.9872 72.9258M45.9872 72.9258L50.1345 75.6659L50.6953 75.2621M45.9872 72.9258L44.6815 72.0631M67.1481 63.4169L68.7589 62.2572M67.1481 63.4169L64.6348 65.2263M68.7589 62.2572C69.0543 61.6017 69.6123 60.5459 70.3125 60.079C70.8433 59.7249 71.5223 59.6651 72.2244 59.7622M55.9548 71.4755L54.0548 72.8434M54.0548 72.8434L52.529 74.7145C51.9608 75.0689 51.328 75.2464 50.6953 75.2621M36.8725 66.9037C36.2059 67.4757 35.8243 68.3672 35.9314 69.3163C36.101 70.8196 37.4329 71.898 38.9061 71.7249C40.019 71.5941 40.8942 70.7866 41.1827 69.7514C41.2761 69.4162 41.308 69.0571 41.2665 68.6893C41.0968 67.186 39.765 66.1076 38.2917 66.2807C37.7485 66.3446 37.2619 66.5696 36.8725 66.9037ZM23.9129 52.1769L60.4314 30.2562M30.3573 56.561L66.8759 34.6403M74.3944 37.9284L39.9538 58.6018M81.9129 41.2165L55.5033 57.0692'
        stroke={color}
      />
    </svg>
  )
}

export default TimelineIcon
