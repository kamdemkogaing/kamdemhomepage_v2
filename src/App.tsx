import KamdemNavbar from "./components/Navbars/KamdemNavbar";
import KamdemFooter from "./components/Footers/KamdemFooter";
import KamdemSectionTabs from "./components/Views/KamdemSectionTabs";
import KamdemSectionLogin from "./components/Views/KamdemSectionLogin";
import KamdemWorkSection from "./components/Views/KamdemWorkSection";
import KamdemWorkSectionPartner from "./components/Views/KamdemSectionPartner";

function App() {
  return (
    <div>
      <KamdemNavbar />
      <KamdemSectionTabs />
      <KamdemSectionLogin />
      <KamdemWorkSectionPartner />
      <KamdemWorkSection />
      <KamdemFooter />
    </div>
  );
}

export default App;
