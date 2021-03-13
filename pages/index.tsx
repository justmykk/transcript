import { ContactUs } from '../components/home/ContactUs';
import { Feedback } from '../components/home/Feedback';
import { NavBar } from '../components/home/NavBar';
import { SectionOne } from '../components/home/SectionOne';
import { SectionTwo } from '../components/home/SectionTwo';
import { WhyUse } from '../components/home/WhyUse';

export default function Home() {
  return (
    <>
      <NavBar />
      <div style={{ height: '108px' }} />
      <SectionOne />
      <WhyUse />
      <SectionTwo />
      <Feedback />
      <ContactUs />
    </>
  );
}
