import { useState, useEffect } from 'react';
import { apiClient } from '@ovh-ux/manager-core-api';

interface IamIterface {
  urns?: any;
  actionsPage?: any;
}

export default function useIAM({ urns, actionsPage }: IamIterface) {
  const [actions, setActions] = useState([]);
  const [authorizedActions, setAuthorizedActions] = useState({});

  useEffect(() => {
    setActions(actionsPage);
  }, []);

  useEffect(() => {
    if (actions && urns) {
      const tmp: any = {};
      const fetchAuthorizationCheck = async ({ resourceURN, id }: any) => {
        const { data } = await apiClient.v2.post(
          `/iam/resource/${resourceURN}/authorization/check`,
          {
            actions,
          },
        );
        tmp[id] = { ...data };
        return tmp[id];
      };
      Promise.all(
        urns.map((element: any) =>
          fetchAuthorizationCheck({
            resourceURN: element.urn,
            id: element.id,
          }),
        ),
      )
        .then((dataArray) => {
          setAuthorizedActions(tmp);
        })
        .catch((error2) => {
          console.info('error :', error2);
        });
    }
  }, [actions, urns]);

  return authorizedActions;
}
