'use client';

// components
import { Button } from '@/shared/ui/button/button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion/accordion';
import { GuideQuestionHeader } from './GuideQuestionHeader';

interface InvestmentsGuideProps {
  close: () => void;
}
export function InvestmentsGuide({ close }: InvestmentsGuideProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">투자/M&A 탐색</h1>

      <div className="relative h-[400px]">
        <div
          className="flex flex-col gap-6 h-full overflow-y-auto pb-24"
          style={{ scrollbarWidth: 'none' }}
        >
          <p className="text-gray-300">
            개별 투자 및 M&A에 대한 개괄적인 정보를 제공합니다. 기본적으로 최근에 일어난 투자 순으로
            정렬되어있습니다. 투자 날짜, 총 투자금액, 투자단계, 투자종류, 투자대상 및 기업 정보,
            투자자 및 기업 정보를 확인할 수 있습니다.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <GuideQuestionHeader>투자 날짜에 대해 궁금하신가요?</GuideQuestionHeader>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-300">해당 투자 라운드의 클로징 날짜입니다.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <GuideQuestionHeader>투자 단계는 어떻게 구성되나요?</GuideQuestionHeader>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-300 flex flex-col gap-4">
                  <p>
                    <strong>
                      더브이씨가 자체적으로 수집한 데이터를 기반으로 투자 단계를 입력하거나 추정하고
                      있습니다.
                    </strong>
                    <br />
                    최우선적으로 보도 자료에 명시 되어있거나 기업에서 직접 투자 단계를 밝혀온 경우를
                    1순위로 놓고 있으며, 투자 단계가 명시되지 않은 정보의 경우 더브이씨의 투자
                    데이터에 기반한 알고리즘을 통해 투자 단계를 추정하고 있습니다.
                  </p>
                  <ul className="space-y-1">
                    <li>
                      <strong>투자</strong> : Seed, Sereis A, B, C 이상
                    </li>
                    <li>
                      <strong>인수합병</strong> : M&A(인수, 합병)
                    </li>
                    <li>
                      <strong>지원금</strong> : 지원금(TIPS)
                    </li>
                    <li>
                      <strong>상장</strong> : IPO
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <GuideQuestionHeader>
                  투자 유치 / 매각 진행 / 상장 진행이 궁금하신가요?
                </GuideQuestionHeader>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-300 flex flex-col gap-2">
                  <ul className="space-y-2">
                    <li>
                      <strong>투자 유치 중</strong> : 기업으로부터 자체 양식을 통해 직접 제보 받거나
                      보도 자료에서 수집합니다.
                      <ul className="space-y-2 text-sm my-2">
                        <li className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                          기업으로부터 직접 제보받은 정보는 더브이씨가 사실을 확인하거나 검증하지
                          않습니다.
                          <br />
                          따라서, 제공된 정보에 의한 투자 결과에 법적인 책임을 지지 않습니다.
                        </li>
                        <li className="relative pl-5 before:content-['•'] before:absolute before:left-0">
                          기업이 제공한 IR 자료 링크는 해당 기업이 소유한 GoogleDrive 계정과
                          연동되어있습니다. 따라서, 공개 여부는
                          <br />
                          기업 스스로가 판단하여 게재한 것이며, 더브이씨의 데이터베이스에는 URL 외에
                          저장하지 않습니다.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>매각 진행 중</strong> : 보도 자료에서 수집합니다.
                    </li>
                    <li>
                      <strong>상장 진행 중</strong> : 한국거래소 공시 자료에서 수집합니다.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Link href="https://guide.thevc.kr/profile" target="_blank">
          <Button variant="default" className="bg-gray-500 text-md font-bold" size="lg">
            자세히보기
          </Button>
        </Link>

        <Button
          variant="default"
          className="bg-purple-400 text-white text-md font-bold"
          size="lg"
          onClick={close}
        >
          확인
        </Button>
      </div>
    </div>
  );
}

// 'use client';

// // components
// import { Button } from '@/shared/ui/button/button';
// import Link from 'next/link';

// interface InvestmentsGuideProps {
//   close: () => void;
// }
// export function InvestmentsGuide({ close }: InvestmentsGuideProps) {
//   return (
//     <div className="flex flex-col gap-4">
//       <h1 className="text-2xl font-bold">투자/M&A 탐색</h1>

//       <div className="relative">
//         <div
//           className="flex flex-col gap-6 max-h-[400px] overflow-y-auto pb-10"
//           style={{ scrollbarWidth: 'none' }}
//         >
//           <p className="text-gray-300">
//             개별 투자 및 M&A에 대한 개괄적인 정보를 제공합니다. 기본적으로 최근에 일어난 투자 순으로
//             정렬되어있습니다. 투자 날짜, 총 투자금액, 투자단계, 투자종류, 투자대상 및 기업 정보,
//             투자자 및 기업 정보를 확인할 수 있습니다.
//           </p>
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center gap-2 font-bold text-lg">
//               <span className="text-purple-400">Q</span>
//               <span>투자 날짜에 대해 궁금하신가요?</span>
//             </div>
//             <p className="text-gray-300">해당 투자 라운드의 클로징 날짜입니다.</p>
//           </div>

//           <div className="flex flex-col gap-2">
//             <div className="flex items-center gap-2 font-bold text-lg">
//               <span className="text-purple-400">Q</span>
//               <span>투자 단계는 어떻게 구성되나요?</span>
//             </div>
//             <div className="text-gray-300 flex flex-col gap-4">
//               <p>
//                 <strong>
//                   더브이씨가 자체적으로 수집한 데이터를 기반으로 투자 단계를 입력하거나 추정하고
//                   있습니다.
//                 </strong>
//                 <br />
//                 최우선적으로 보도 자료에 명시 되어있거나 기업에서 직접 투자 단계를 밝혀온 경우를
//                 1순위로 놓고 있으며, 투자 단계가 명시되지 않은 정보의 경우 더브이씨의 투자 데이터에
//                 기반한 알고리즘을 통해 투자 단계를 추정하고 있습니다.
//               </p>
//               <ul className="space-y-1">
//                 <li>
//                   <strong>투자</strong> : Seed, Sereis A, B, C 이상
//                 </li>
//                 <li>
//                   <strong>인수합병</strong> : M&A(인수, 합병)
//                 </li>
//                 <li>
//                   <strong>지원금</strong> : 지원금(TIPS)
//                 </li>
//                 <li>
//                   <strong>상장</strong> : IPO
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2">
//             <div className="flex items-center gap-2 font-bold text-lg">
//               <span className="text-purple-400">Q</span>
//               <span>투자 유치 / 매각 진행 / 상장 진행이 궁금하신가요?</span>
//             </div>
//             <div className="text-gray-300 flex flex-col gap-2">
//               <ul className="space-y-2">
//                 <li>
//                   <strong>투자 유치 중</strong> : 기업으로부터 자체 양식을 통해 직접 제보 받거나
//                   보도 자료에서 수집합니다.
//                   <ul className="space-y-2 text-sm my-2">
//                     <li className="relative pl-5 before:content-['•'] before:absolute before:left-0">
//                       기업으로부터 직접 제보받은 정보는 더브이씨가 사실을 확인하거나 검증하지
//                       않습니다.
//                       <br />
//                       따라서, 제공된 정보에 의한 투자 결과에 법적인 책임을 지지 않습니다.
//                     </li>
//                     <li className="relative pl-5 before:content-['•'] before:absolute before:left-0">
//                       기업이 제공한 IR 자료 링크는 해당 기업이 소유한 GoogleDrive 계정과
//                       연동되어있습니다. 따라서, 공개 여부는
//                       <br />
//                       기업 스스로가 판단하여 게재한 것이며, 더브이씨의 데이터베이스에는 URL 외에
//                       저장하지 않습니다.
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <strong>매각 진행 중</strong> : 보도 자료에서 수집합니다.
//                 </li>
//                 <li>
//                   <strong>상장 진행 중</strong> : 한국거래소 공시 자료에서 수집합니다.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-900 to-transparent" />
//       </div>

//       <div className="flex justify-end gap-2 pt-2">
//         <Link href="https://guide.thevc.kr/profile" target="_blank">
//           <Button variant="default" className="bg-gray-500 text-md font-bold" size="lg">
//             자세히보기
//           </Button>
//         </Link>

//         <Button
//           variant="default"
//           className="bg-purple-400 text-white text-md font-bold"
//           size="lg"
//           onClick={close}
//         >
//           확인
//         </Button>
//       </div>
//     </div>
//   );
// }
