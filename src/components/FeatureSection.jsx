import React from 'react'

const FeatureSection = () => {
  return (
 <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Your Trusted Partner in Pure Hydration</h2>
                <p className="text-gray-600 mb-12">From sachets to bottles to dispensers, we offer clean, affordable, and certified drinking water tailored to meet your daily needs. Backed by the highest purification standards and a commitment to excellence, <b>CPEURW</b> brings hydration to your home, office, or event — one drop at a time.
                </p>
            </div>
            <div className="flex flex-wrap -mx-4 mt-12">
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="rounded-md bg-white shadow-lg p-8">
                        <div className="text-4xl font-bold text-purple-600 mb-4">
                            <svg height={100} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fillRule="evenodd"> <path fill="#B4DFFB" d="M26.6995662,63 C36.4747667,63 44.3991324,55.0756343 44.3991324,45.3004338 C44.3991324,35.5252333 26.6995662,9 26.6995662,9 C26.6995662,9 9,35.5252333 9,45.3004338 C9,55.0756343 16.9243657,63 26.6995662,63 Z"></path> <path fill="#4796E7" d="M41.1107898,41 C48.351679,41 54.2215796,35.1300995 54.2215796,27.8892102 C54.2215796,20.648321 41.1107898,1 41.1107898,1 C41.1107898,1 28,20.648321 28,27.8892102 C28,35.1300995 33.8699005,41 41.1107898,41 Z"></path> <path stroke="#B4DFFB" strokeLinecap="round" strokeWidth="2" d="M32,28 C32,32.9705627 36.0294373,37 41,37 L41,37"></path> <path stroke="#FFF" strokeLinecap="round" strokeWidth="2" d="M13,46 C13,52.627417 18.372583,58 25,58 L25,58"></path> </g> </g></svg>
                        </div>
                        <p className="text-gray-600 mb-4"><b>CPEURW</b> Sachet Water is premium-quality purified 
                        drinking water conveniently packaged in 500ml 
                        heat-sealed sachets, designed to provide safe, hygienic,
                         and refreshing hydration for everyone.
                         Produced using multi-stage filtration, reverse osmosis (RO), and UV sterilization
                         </p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="rounded-md bg-white shadow-md p-8">
                        <div className="text-4xl font-bold text-purple-600 mb-4">
                            <svg height={100} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9925 2.01655C15.927 2.11481 15.861 2.23414 15.7998 2.34477L15.4773 2.92766L12.6497 4.31736C12.5735 4.3548 12.5266 4.37783 12.4819 4.40082C10.856 5.2357 9.71047 6.80449 9.36562 8.63376C9.35611 8.68419 9.34708 8.73684 9.33217 8.82378L9.33094 8.83097C9.31501 8.92385 9.30798 8.96477 9.30076 9.00426C9.03456 10.4599 8.3439 11.7884 7.32835 12.8102C7.30083 12.8379 7.27207 12.8662 7.20619 12.9309L6.4018 13.7219C5.89777 14.2174 5.49146 14.617 5.18768 14.9606C4.87759 15.3115 4.62758 15.6545 4.47734 16.049C4.07618 17.1023 4.21118 18.2961 4.84068 19.2292C5.07679 19.5791 5.39871 19.8547 5.7799 20.1229C6.15313 20.3854 6.63864 20.6779 7.24012 21.0402L7.95314 21.4697C8.55438 21.8319 9.03997 22.1244 9.44477 22.3306C9.85683 22.5404 10.2515 22.6965 10.6702 22.7359C11.7877 22.8408 12.8691 22.3508 13.5501 21.452C13.8038 21.1172 13.9627 20.7204 14.0978 20.2682C14.2308 19.8231 14.359 19.2574 14.5185 18.5532L14.7726 17.432C14.7934 17.3402 14.8025 17.2998 14.8118 17.2608C15.1543 15.8233 15.9137 14.5374 16.9809 13.5762C17.0098 13.5501 17.04 13.5235 17.1092 13.4626L17.1147 13.4578C17.1793 13.401 17.2187 13.3662 17.2562 13.3321C18.614 12.095 19.3318 10.2778 19.2136 8.41833C19.2103 8.36709 19.206 8.31379 19.199 8.2258L18.9373 4.95872L19.2924 4.31688C19.3496 4.21362 19.4119 4.10111 19.4581 3.99909C19.5106 3.88316 19.5692 3.72518 19.5779 3.53239C19.5895 3.27496 19.5213 3.02022 19.3826 2.80305C19.2787 2.64041 19.149 2.53284 19.0456 2.45865C18.9547 2.39336 18.8445 2.32701 18.7434 2.26613L17.928 1.77495C17.8197 1.70969 17.7029 1.63931 17.5971 1.58694C17.4778 1.52791 17.3127 1.46026 17.109 1.44804C16.8392 1.43186 16.5715 1.50355 16.3459 1.65237C16.1756 1.7647 16.0663 1.90581 15.9925 2.01655ZM15.983 4.35048L17.4548 5.23707L17.7032 8.33815C17.7083 8.40209 17.7115 8.44144 17.7137 8.47153L16.6585 8.82323C16.0296 9.03287 15.3373 8.9094 14.8196 8.49527C13.7675 7.65357 12.322 7.50043 11.1169 8.103L11.0572 8.13283C11.4489 7.08929 12.1998 6.23186 13.1671 5.73518C13.1987 5.71894 13.2331 5.70201 13.3182 5.66017L15.983 4.35048Z" fill="#4796E7"></path> </g></svg>
                        </div>
                        <p className="text-gray-600 mb-4">
                            <b>CPEURW</b> Bottled Water is premium-grade, crystal-clear drinking water, expertly 
                            purified and bottled to deliver safe, refreshing,
                             and great-tasting hydration for every lifestyle.
                             Treated through a rigorous multi-stage purification process — including (RO), 
                             UV sterilization, and ozone treatment 
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="rounded-md bg-white shadow-md p-8">
                        <div className="text-4xl font-bold text-purple-600 mb-4">
                            <svg fill="#4796E7" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 391.446 391.446" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M287.294,34.33c0.229-0.848,0.344-1.722,0.344-2.601V19.774C287.638,8.871,278.768,0,267.864,0H165.408 c-10.904,0-19.774,8.871-19.774,19.774v11.955c0,0.798,0.096,1.594,0.285,2.369l6.132,25.146v57.957l-6.007,20.342 c-0.012,0.042-0.016,0.086-0.028,0.128h-32.207c-5.523,0-10,4.477-10,10v18.939c0,5.523,4.477,10,10,10s10-4.477,10-10v-8.939 h21.825v21.995c0,5.523,4.477,10,10,10h13.561l-2.846,13.444h-10.715c-5.523,0-10,4.477-10,10v12.583h-31.825 c-3.649,0-7.009,1.988-8.765,5.187c-1.757,3.199-1.631,7.1,0.327,10.18l40.264,63.316v77.07c0,5.523,4.477,10,10,10h122.005 c5.523,0,10-4.477,10-10V213.111c0-5.523-4.477-10-10-10h-10.714l-2.847-13.444h13.561c5.523,0,10-4.477,10-10v-39.291 c0-1.132-0.192-2.256-0.568-3.323l-6.581-18.676c0.042-0.372,0.068-0.748,0.068-1.132c0-0.759-0.092-1.496-0.252-2.207V60.283 L287.294,34.33z M172.05,107.245V66.747h88.254v40.498H172.05z M165.633,20h102.005v10.406l-4.401,16.341h-93.649l-3.955-16.22V20z M132.018,245.694h13.615v21.41L132.018,245.694z M267.638,371.446H165.633V223.111h102.005V371.446z M246.48,203.111h-59.689 l2.847-13.444h53.995L246.48,203.111z M267.638,169.667h-15.917c-0.024,0-0.048,0-0.072,0h-70.033c-0.02,0-0.04,0-0.06,0h-15.924 v-27.845l4.305-14.577h92.47l5.23,14.841V169.667z"></path> </g> </g></svg>
                        </div>
                   
                        <p className="text-gray-600 mb-4">
                            <b>CPEURW</b> Dispenser Water is premium-quality drinking water packaged in refillable 18.9L (or 19L) polycarbonate bottles, 
                            designed for use with water dispensers in homes, offices, schools, and commercial spaces.
                            Purified using a multi-stage filtration system — including (RO), 
                            UV sterilization, and ozone treatment
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection
