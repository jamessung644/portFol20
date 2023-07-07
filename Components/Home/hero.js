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
              strings: ['James sung','Programmer', 'Entreprenuer'],
              autoStart: true,
              loop: true,
          }}
            />
         </h1>
            <p class="mb-8 leading-relaxed">강원대학교 AI융합학과 2023~ <br />춘천 제 1회 창업경진대회 사업단장상 2023/3/30 <br /> 
            KIRUS-RIS 인문사회 데이터분석 수료 2023/04/01<br/> (2023 강원대학교 정밀의료 빅데이터 <br /> PBL교육 대상 수상 2023/6/10) <br /> 
            (2023년 SW 창업역량 강화 및 창업지원 프로그램 <br />데모데이 우수상 수상) 2023/06/23<br /> 
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
