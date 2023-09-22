import ControlRoom from "../components/ControlRoom.vue";
import StatisticReport from "../components/StatisticReport.vue";

export const routes = [
  {
    path: "/",
    redirect: { path: "/statistic-report" },
  },
  {
    path: "/control-room",
    component: ControlRoom,
  },
  {
    path: "/statistic-report",
    component: StatisticReport,
  },
];
