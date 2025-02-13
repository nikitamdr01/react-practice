import Javascript from "@/components/javascript";
import Card from "../components/card";
import Grid from "../components/grid";
import ReusableCard from "@/components/reusableCard";
export default function Home() {
  return (
    <div className="bg-slate-300 ">
      <Card/>
      <Grid/>
      <Javascript/>
      <ReusableCard name="Gojo" college="Jujustu" phone="9841662323"
      image="https://media.licdn.com/dms/image/v2/D4D12AQEbLPwJY8C-Zw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707470435373?e=2147483647&v=beta&t=SBWN8sqURYpCPkbVpSSwElz7vL04hwyhg1_Cvv7wH6Q"/>
      <ReusableCard name="Nick" college="Kiasen" phone="9821435345" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMkC4cKeBgkMDRlvYDZYfH_XgtVhZpPQyDrQ&s"/>
    </div>
  );
}
