import Animation from 'Components/Home/animation'
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
        <div className="lg:w-1/2 w-full mb-10 md:mb-0 lg:pr-10 flex items-center justify-center">
            <Animation />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-0 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">성수한</h1>
         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><Typewriter
          options={{
              strings: ['James sung','Programmer', 'Entreprenuer','Inventor'],
              autoStart: true,
              loop: true,
          }}
            />
         </h1>
            <p class="mb-8 leading-relaxed">강원대학교 2023~ <br />춘천 제 1회 창업경진대회 사업단장상 2023/3/30 <br /> 
            True_Pulse 공동창업가  2023~<br /> True_Pulse 수석 개발자 <br />
             No_Cap 공동창업가  2023~<br /> No_Cap 수석 개발자</p>
            <div class="flex justify-center">
            <Link href="/portfolio">
                 <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">PortFolio</button>
             </Link>
              
            </div>
        </div>
    </div>
  );
}
