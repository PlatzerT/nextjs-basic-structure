import Sidebar from "../Sidebar";
import TopBar from "../TopBar";

interface Props {
  children: React.ReactNode;
}

const AppShell: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default AppShell;
