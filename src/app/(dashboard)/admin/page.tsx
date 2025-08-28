// import Announcements from "@/components/Announcements";
// import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CalendarComp from "@/components/Calender";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">


      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
          Hola
        </div>
      </div>





      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex  flex-col gap-8">

        <CalendarComp/>
        <Announcements/>
      </div>
    </div>
  );
};

export default AdminPage;