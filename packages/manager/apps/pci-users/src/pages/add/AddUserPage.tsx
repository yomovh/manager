import { useNavigate, useParams } from 'react-router-dom';
import AddUserModal from '@/components/users/AddUserModal';

export default function AddUserPage(): JSX.Element {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate('..');
  };
  return (
    <>
      <AddUserModal
        onClose={goBack}
        projectId={projectId!}
        onConfirm={() => alert('r')}
      />
    </>
  );
}
