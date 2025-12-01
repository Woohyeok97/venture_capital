import { redirect } from 'next/navigation';

export default function Home() {
  // return <div>Home</div>;
  redirect('/browse/investments'); // 임시: 메인 페이지 -> 투자/M&A 페이지 리다이렉트
}
