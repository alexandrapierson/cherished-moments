import { SVGProps } from './svgProps'

const FloralIcon: React.FC<SVGProps> = ({
  color = '#1a1a1e',
  width = '100',
  height = '100',
  className = '',
  alt = 'Floral service.'
}) => {
  return (
    <svg
      className={className}
      role='img'
      aria-label={alt}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M66.2706 22.6774L65.4539 23.3613C65.1708 23.5983 65.0551 23.9667 65.1584 24.3025C65.3035 24.774 65.8275 25.0326 66.3289 24.8801L69.8078 23.8214C70.5488 23.5959 70.9758 22.8482 70.7615 22.1513L70.2407 20.4582C70.0264 19.7613 69.2519 19.3792 68.5109 19.6047L62.6016 21.4029C61.8606 21.6284 61.4336 22.3761 61.6479 23.073L63.0333 27.5772C63.2476 28.2741 64.0221 28.6563 64.7631 28.4308L72.8694 25.9641M72.8694 25.9641L74.1627 25.5705C74.61 25.4344 75.1085 25.5026 75.421 25.821C76.0133 26.4243 76.1214 27.0208 75.7431 28.1638C75.3646 29.3071 67.8618 30.8514 64.286 31.6502C64.2585 31.6564 64.2301 31.6629 64.2007 31.6699C62.6553 32.037 61.0568 31.3352 60.6172 29.906L58.3072 22.3953C57.8785 21.0015 58.7324 19.506 60.2144 19.0551L69.1688 16.3302C70.6508 15.8792 72.2 16.6442 72.6287 18.038L72.7169 18.3248C72.8873 18.8788 73.7956 20.779 74.4379 23.2516C74.8924 24.671 74.5073 25.2509 72.8694 25.9641ZM79.3448 38.8863L79.8302 39.6842C80.0165 39.9905 80.3781 40.1611 80.7646 40.1249C81.3289 40.0722 81.7692 39.6024 81.748 39.0755L81.6256 36.0314C81.5964 35.3071 80.9439 34.7787 80.1681 34.8513L78.0208 35.052C77.245 35.1246 76.6398 35.7705 76.6689 36.4948L76.8837 41.8361C76.9128 42.5604 77.5653 43.0888 78.3411 43.0162L83.7929 42.5065C84.5687 42.434 85.174 41.788 85.1448 41.0637L84.8454 33.6183M84.8454 33.6183L84.8003 32.4974C84.7818 32.0375 85.0132 31.5688 85.4582 31.3444C86.2774 30.9314 86.9546 30.9362 88.075 31.4473C89.2049 31.9627 88.6827 38.7984 88.502 42.0662C88.4215 43.5228 87.3164 44.8418 85.7641 44.987L76.5481 45.8486C74.9966 45.9937 73.6915 44.9369 73.6333 43.4883L73.3104 35.4605C73.2521 34.0119 74.4628 32.72 76.0144 32.5749L76.5094 32.5286C77.1606 32.4677 79.4891 31.9745 82.361 31.8065C84.0348 31.6348 84.5513 32.0658 84.8454 33.6183ZM38.5141 25.9628C37.3166 26.6604 36.4473 27.6462 35.9647 28.7303M38.5141 25.9628C39.8279 25.1974 41.3053 24.9137 42.6698 25.067M38.5141 25.9628L35.5007 21.4932M42.1581 25.0312L40.745 18.7109C39.1537 16.3505 35.5751 15.7708 32.7517 17.4157C29.9284 19.0606 28.9294 22.3072 30.5207 24.6676L36.0235 28.6052L35.9647 28.7303M45.7228 26.3665C46.0188 26.6274 46.2828 26.9249 46.5074 27.258C46.8593 27.78 47.0846 28.3455 47.1914 28.9274M45.7228 26.3665L50.3771 21.3448M45.7228 26.3665C44.8973 25.6388 43.8239 25.1966 42.6698 25.067M46.6999 32.0057C46.199 32.9854 45.3761 33.8692 44.2764 34.5099C44.2217 34.5417 44.1668 34.5727 44.1116 34.6029M46.6999 32.0057L52.4645 34.3263M46.6999 32.0057C47.1714 31.0835 47.3575 30.0762 47.2205 29.1065M39.7886 35.3594L38.6184 40.9733M39.7886 35.3594C38.7084 35.1791 37.7156 34.719 36.9536 34.0024M39.7886 35.3594C40.9323 35.5503 42.174 35.4276 43.3434 34.9636M36.9536 34.0024C36.7036 33.7672 36.4784 33.5043 36.2831 33.2147C35.8414 32.5596 35.5993 31.8362 35.5403 31.0977M36.9536 34.0024L29.506 37.8479C26.3062 38.5742 23.2947 36.9063 22.7791 34.1227C22.2635 31.339 24.4391 28.4937 27.6389 27.7673L35.9647 28.7303M36.9536 34.0024L33.0938 40.9736C32.6449 43.848 34.8829 46.2792 38.0925 46.4043C41.3022 46.5295 44.268 44.3012 44.717 41.4269L43.3434 34.9636M35.9647 28.7303C35.6252 29.4929 35.477 30.304 35.5403 31.0977M42.6698 25.067L45.9846 18.58C48.2232 16.3196 51.9376 15.9302 54.2812 17.7099C56.6249 19.4896 56.7103 22.7645 54.4717 25.0249L47.1914 28.9274M47.1914 28.9274C47.2023 28.9869 47.212 29.0466 47.2205 29.1065M47.2205 29.1065L54.9048 29.1558C57.8453 30.1116 59.1237 33.086 57.7606 35.7995C56.3975 38.5129 52.9091 39.9379 49.9686 38.9821L44.1116 34.6029M44.1116 34.6029C43.8604 34.7402 43.6037 34.8604 43.3434 34.9636M35.5403 31.0977L27.8136 32.3607M39.6236 32.579L40.909 33.2499M42.7034 32.2044L43.8996 31.5075M38.3382 31.9081L38.2491 30.5402M40.7308 30.5142L42.2706 30.3269M39.1018 29.3336L40.298 28.6366M44.7523 30.3009L45.6049 29.0942M44.664 57.4315C43.4075 56.9858 42.0554 56.9683 40.8121 57.3011M44.664 57.4315C46.0426 57.9205 47.0634 58.8387 47.625 59.9519M44.664 57.4315L47.2148 52.3363M47.3945 59.5483L52.4672 54.4625C53.8143 51.7717 52.5045 48.7389 49.5418 47.688C46.5792 46.6372 43.0856 47.9662 41.7385 50.657L40.9572 57.265L40.8121 57.3011M48.0038 63.0532C47.9167 63.4399 47.7795 63.8264 47.5895 64.206C47.2915 64.8012 46.8885 65.3297 46.4095 65.7806M48.0038 63.0532L55.0076 63.3109M48.0038 63.0532C48.2467 61.9744 48.1 60.8934 47.625 59.9519M43.3316 67.3798C42.1747 67.6325 40.9402 67.5843 39.7862 67.175C39.7289 67.1547 39.6721 67.1336 39.616 67.1118M43.3316 67.3798L44.169 73.1505M43.3316 67.3798C44.4206 67.142 45.4407 66.6375 46.2601 65.9166M36.6968 64.378L30.9427 67.0907M36.6968 64.378C36.3063 63.4591 36.2175 62.4267 36.483 61.4022M36.6968 64.378C37.1103 65.3508 37.862 66.1964 38.8896 66.7704M36.483 61.4022C36.5702 61.066 36.6955 60.7307 36.8608 60.4005C37.2346 59.6537 37.7738 59.0118 38.4212 58.4965M36.483 61.4022L29.1209 58.3152C26.8074 56.3979 26.7881 53.0924 29.0772 50.9318C31.3664 48.7713 35.0973 48.5739 37.4107 50.4913L40.8121 57.3011M36.483 61.4022L28.099 62.9801C25.2301 64.4808 24.1509 67.698 25.688 70.1661C27.2251 72.6343 30.7964 73.4188 33.6653 71.9181L38.8896 66.7704M40.8121 57.3011C39.9376 57.5352 39.117 57.9427 38.4212 58.4965M47.625 59.9519L55.2841 58.2777C58.5107 58.5005 60.7797 61.0158 60.3527 63.8957C59.9258 66.7756 56.9644 68.9296 53.7378 68.7068L46.4095 65.7806M46.4095 65.7806C46.3605 65.8267 46.3107 65.8721 46.2601 65.9166M46.2601 65.9166L50.1699 71.6659C50.8061 74.464 48.7345 77.3139 45.5428 78.0317C42.3511 78.7494 39.2481 77.0634 38.6118 74.2652L39.616 67.1118M39.616 67.1118C39.3607 67.0125 39.1183 66.8982 38.8896 66.7704M38.4212 58.4965L33.2854 53.5533M39.1635 62.4804L39.2094 63.8651M41.0923 64.5329L42.3475 64.9782M39.1176 61.0957L40.327 60.1562M41.6281 61.9862L42.5925 63.0125M41.8731 60.0205L43.1284 60.4657M43.8937 64.8424L45.4398 64.7066M61.2038 42.5386L60.4945 39.6236C60.667 38.3046 62.02 37.2899 63.5166 37.3572C65.0133 37.4244 66.0868 38.5481 65.9144 39.8671L64.4558 42.6847M59.48 44.7554L56.066 44.5056C54.7215 43.9859 54.1827 42.5805 54.8625 41.3663C55.5423 40.1521 57.1832 39.589 58.5278 40.1087L60.9571 42.1173M64.764 42.7526L67.7889 41.1305C69.2712 40.8112 70.6917 41.5912 70.9621 42.8727C71.2324 44.1543 70.2503 45.452 68.768 45.7713L65.3515 45.5371M65.0953 45.5957L67.643 47.4898C68.377 48.6 67.9052 50.0798 66.5895 50.7953C65.2738 51.5109 63.6123 51.1911 62.8784 50.0809L62.2365 47.1504M61.7705 46.9085L60.2845 49.7163C59.239 50.7238 57.5122 50.8482 56.4274 49.9942C55.3425 49.1402 55.3104 47.6313 56.3559 46.6238L59.4133 45.053M69.4572 57.328L68.2471 53.6286C68.3263 51.9109 69.9378 50.4816 71.8464 50.4359C73.755 50.3902 75.238 51.7455 75.1588 53.4632L73.6043 57.2288M67.5021 60.3418L63.1382 60.3215C61.3749 59.7698 60.5415 58.0035 61.2765 56.3762C62.0114 54.749 64.0365 53.877 65.7998 54.4287L69.0991 56.8061M74.0031 57.2892L77.6743 54.9279C79.5235 54.3846 81.411 55.2656 81.8903 56.8957C82.3697 58.5257 81.2594 60.2875 79.4101 60.8309L75.0446 60.831M74.7254 60.9294L78.163 63.1484C79.2131 64.5163 78.7706 66.4681 77.1748 67.508C75.579 68.5479 73.4343 68.2823 72.3841 66.9144L71.2581 63.1889M70.6403 62.9179L69.05 66.6733C67.8286 68.0662 65.6479 68.3796 64.1791 67.3734C62.7103 66.3672 62.5096 64.4226 63.731 63.0297L67.4489 60.7317M20.8352 46.1087L18.0811 45.0637C17.1403 44.2715 17.1722 42.8725 18.1522 41.9387C19.1322 41.0049 20.6892 40.89 21.63 41.6822L22.9646 44.0798M21.5285 48.3679L19.2165 50.4482C17.9713 51.0501 16.5216 50.6735 15.9782 49.6072C15.4348 48.5408 16.0036 47.1885 17.2487 46.5866L20.3479 46.051M23.2094 43.9154L23.7939 41.1211C24.458 39.9972 25.9569 39.4805 27.1421 39.9667C28.3272 40.453 28.7497 41.7581 28.0857 42.882L25.7844 44.9719M25.6724 45.168L28.754 44.4966C30.09 44.5945 30.9732 45.6633 30.7269 46.8839C30.4805 48.1045 29.1979 49.0146 27.8619 48.9167L25.1372 47.82M24.6565 47.9967L25.9664 50.407C26.1193 51.6033 25.1489 52.7849 23.7991 53.0463C22.4493 53.3076 21.2311 52.5498 21.0782 51.3535L21.7235 48.5646M22.3801 59.3866L20.2354 68.0751M22.3801 59.3866C22.3801 59.3866 24.2954 61.132 24.5406 62.5913C24.9807 65.2108 20.2354 68.0751 20.2354 68.0751M22.3801 59.3866C22.3801 59.3866 19.8378 60.1812 18.9327 61.3951C17.3081 63.5741 20.2354 68.0751 20.2354 68.0751M80.2298 27.9142L85.5834 20.2386M80.2298 27.9142C80.2298 27.9142 79.0597 25.7661 79.3794 24.3206C79.9533 21.7257 85.5834 20.2386 85.5834 20.2386M80.2298 27.9142C80.2298 27.9142 82.9649 27.8185 84.2924 26.9025C86.6751 25.2583 85.5834 20.2386 85.5834 20.2386M27.4725 24.8819L19.2418 20.6402M27.4725 24.8819C27.4725 24.8819 25.0085 26.1004 23.4169 25.9223C20.56 25.6026 19.2418 20.6402 19.2418 20.6402M27.4725 24.8819C27.4725 24.8819 27.5305 22.4234 26.5897 21.2965C24.9009 19.2736 19.2418 20.6402 19.2418 20.6402M57.6351 16.3088C57.6351 16.3088 54.0815 13.2289 53.7462 10.5404C53.1443 5.7144 62.6447 0 62.6447 0C62.6447 0 67.8984 8.1108 64.5298 12.2919C62.6533 14.6211 57.6351 16.3088 57.6351 16.3088ZM57.6351 16.3088L58.4726 13.5822M58.4726 13.5822L55.6673 9.42114M58.4726 13.5822L58.9942 11.8845M58.9942 11.8845L63.181 9.44516M58.9942 11.8845L60.2179 7.90056M60.2179 7.90056L62.0157 5.24529M60.2179 7.90056L58.4275 5.24488M83.5632 51.2451C83.5632 51.2451 87.5238 47.9008 90.6286 47.4954C96.2018 46.7677 101.5 55.1859 101.5 55.1859C101.5 55.1859 91.5928 60.2634 87.2599 57.3593C84.846 55.7414 83.5632 51.2451 83.5632 51.2451ZM83.5632 51.2451L86.5619 51.9039M86.5619 51.9039L91.6586 49.199M86.5619 51.9039L88.4291 52.3142M88.4291 52.3142L90.674 56.0271M88.4291 52.3142L92.8107 53.2768M92.8107 53.2768L95.606 54.8109M92.8107 53.2768L96.0636 51.5505M18.9249 36.0632C18.9249 36.0632 15.3467 39.7381 12.2839 40.4305C6.78599 41.6735 0.5 33.8597 0.5 33.8597C0.5 33.8597 9.83304 27.9138 14.5109 30.3737C17.1169 31.7441 18.9249 36.0632 18.9249 36.0632ZM18.9249 36.0632L15.8446 35.6948M15.8446 35.6948L11.054 38.8453M15.8446 35.6948L13.9265 35.4654M13.9265 35.4654L11.2461 32.0104M13.9265 35.4654L9.42567 34.9271M9.42567 34.9271L6.44741 33.6754M9.42567 34.9271L6.36825 36.9378M24.5515 57.0349L28.0809 56.3787M24.5515 57.0349L21.7279 57.363M24.5515 57.0349L23.4926 58.3473M27.375 24.8814L33.728 28.1624M44.3163 17.0071V21.6004M83.1402 51.1292H78.9049M83.1402 51.1292L80.3167 55.0664M83.1402 51.1292L80.3167 45.8796M61.2577 68.1903L60.993 66.2217M60.993 66.2217L60.5518 62.9407M60.993 66.2217L62.6694 64.9093M80.3167 28.1624L77.1402 30.7871M77.1402 30.7871L73.9637 33.4119M77.1402 30.7871L75.3754 28.8186M57.7282 15.6947L56.9137 18.9756M56.9137 18.9756L55.6106 24.2252M56.9137 18.9756L58.4341 20.9442M18.9044 36.0367L23.1397 36.5289M23.1397 36.5289L24.5515 36.6929M23.1397 36.5289L21.022 41.2863M21.7279 57.363L18.9044 57.6911M21.7279 57.363L18.9044 51.1292M22.4338 59.6597L23.4926 58.3473M23.4926 58.3473L28.0809 62.9407M49.9635 71.4712H57.7282M34.4339 71.4712L43.6105 83.9389M43.6105 83.9389H57.7282M43.6105 83.9389L40.9572 101H45.8985M57.7282 83.9389L71.846 66.2217M57.7282 83.9389L61.428 101H57.8986M45.8985 101L47.3102 88.5323M45.8985 101H52.2514M52.2514 101V89.8447M52.2514 101H57.8986M57.8986 101L57.1927 93.7819M65.2901 44.6436C65.1176 45.9626 63.7646 46.9773 62.2679 46.9101C60.7713 46.8428 59.6978 45.7191 59.8702 44.4001C60.0426 43.0811 61.3956 42.0664 62.8923 42.1336C64.389 42.2009 65.4625 43.3246 65.2901 44.6436ZM74.8718 59.6832C74.7926 61.4008 73.1811 62.8303 71.2725 62.8759C69.3639 62.9216 67.8809 61.5662 67.9602 59.8486C68.0394 58.131 69.6509 56.7016 71.5595 56.6559C73.4681 56.6102 74.9511 57.9656 74.8718 59.6832ZM25.0368 44.5507C25.9776 45.3428 25.9457 46.7419 24.9657 47.6756C23.9857 48.6094 22.4287 48.7243 21.4879 47.9321C20.5471 47.14 20.579 45.7409 21.559 44.8072C22.539 43.8734 24.096 43.7586 25.0368 44.5507ZM60.1415 76.6603C60.1415 76.6603 64.5101 73.0074 63.6743 70.5575C63.2086 69.1928 61.0122 67.8627 61.0122 67.8627C61.0122 67.8627 58.5613 69.1045 57.8277 70.4465C56.511 72.8554 60.1415 76.6603 60.1415 76.6603ZM9.86098 57.6297C9.86098 57.6297 13.6962 61.2662 16.4709 60.3104C18.0166 59.7779 19.6167 57.6881 19.6167 57.6881C19.6167 57.6881 18.3649 55.5812 16.9091 55.0308C14.2958 54.0427 9.86098 57.6297 9.86098 57.6297ZM57.4791 54.121C57.8932 54.7351 57.6933 55.545 57.0326 55.9299C56.3719 56.3149 55.5007 56.129 55.0866 55.5148C54.6726 54.9007 54.8725 54.0908 55.5331 53.7059C56.1938 53.3209 57.0651 53.5068 57.4791 54.121ZM65.5332 33.9403C65.9473 34.5544 65.7474 35.3644 65.0867 35.7493C64.426 36.1342 63.5548 35.9483 63.1407 35.3342C62.7267 34.72 62.9266 33.9101 63.5873 33.5252C64.2479 33.1403 65.1192 33.3261 65.5332 33.9403ZM70.1749 35.8825C70.589 36.4967 70.389 37.3066 69.7284 37.6915C69.0677 38.0764 68.1965 37.8906 67.7824 37.2764C67.3683 36.6622 67.5683 35.8523 68.2289 35.4674C68.8896 35.0825 69.7609 35.2684 70.1749 35.8825ZM72.5839 46.8697C72.998 47.4838 72.7981 48.2938 72.1374 48.6787C71.4767 49.0636 70.6055 48.8777 70.1914 48.2636C69.7774 47.6494 69.9773 46.8395 70.6379 46.4546C71.2986 46.0697 72.1699 46.2555 72.5839 46.8697ZM79.1716 49.227C79.5856 49.8412 79.3857 50.6511 78.725 51.036C78.0644 51.4209 77.1931 51.2351 76.7791 50.6209C76.365 50.0067 76.5649 49.1968 77.2256 48.8119C77.8863 48.427 78.7575 48.6129 79.1716 49.227ZM52.6776 44.5277C53.0917 45.1418 52.8917 45.9518 52.2311 46.3367C51.5704 46.7216 50.6992 46.5357 50.2851 45.9216C49.871 45.3074 50.071 44.4975 50.7316 44.1126C51.3923 43.7277 52.2635 43.9135 52.6776 44.5277ZM49.2322 41.8885C49.6462 42.5027 49.4463 43.3126 48.7856 43.6975C48.125 44.0824 47.2537 43.8966 46.8397 43.2824C46.4256 42.6682 46.6255 41.8583 47.2862 41.4734C47.9469 41.0885 48.8181 41.2743 49.2322 41.8885ZM46.4755 7.64558C46.4755 7.64558 41.6446 10.7762 42.103 13.3266C42.3583 14.7474 44.3186 16.3407 44.3186 16.3407C44.3186 16.3407 46.9093 15.3921 47.8283 14.1377C49.478 11.8859 46.4755 7.64558 46.4755 7.64558Z'
        stroke={color}
      />
    </svg>
  )
}

export default FloralIcon