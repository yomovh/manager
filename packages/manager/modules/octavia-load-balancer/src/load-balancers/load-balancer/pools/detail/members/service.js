export default class OctaviaLoadBalancerMembersService {
  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  deleteMember(projectId, region, poolId, memberId) {
    return this.$http.delete(
      `/cloud/project/${projectId}/region/${region}/loadbalancing/pool/${poolId}/member/${memberId}`,
    );
  }

  getMembers(projectId, region, poolId) {
    return this.$http
      .get(
        `/cloud/project/${projectId}/region/${region}/loadbalancing/pool/${poolId}/member`,
      )
      .then(({ data }) => data);
  }

  createPoolMember(projectId, region, poolId, address, name, protocolPort) {
    return this.$http.post(
      `/cloud/project/${projectId}/region/${region}/loadbalancing/pool/${poolId}/member`,
      {
        members: [
          {
            address,
            name,
            protocolPort,
          },
        ],
      },
    );
  }
}
