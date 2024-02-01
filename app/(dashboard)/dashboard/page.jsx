import { addUser } from '@/lib/user';

const DashboardPage = async () => {
  addUser();
  return <div>DashboardPage</div>;
};

export default DashboardPage;
