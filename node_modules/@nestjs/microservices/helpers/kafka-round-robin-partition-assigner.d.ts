/// <reference types="node" />
import { Cluster, GroupMember, GroupMemberAssignment, GroupState } from '../external/kafka.interface';
export declare class KafkaRoundRobinPartitionAssigner {
    private readonly config;
    readonly name = "RoundRobinByTime";
    readonly version = 1;
    constructor(config: {
        cluster: Cluster;
    });
    /**
     * This process can result in imbalanced assignments
     * @param {array} members array of members, e.g: [{ memberId: 'test-5f93f5a3' }]
     * @param {array} topics
     * @param {Buffer} userData
     * @returns {array} object partitions per topic per member
     */
    assign(group: {
        members: GroupMember[];
        topics: string[];
        userData: Buffer;
    }): Promise<GroupMemberAssignment[]>;
    protocol(subscription: {
        topics: string[];
        userData: Buffer;
    }): GroupState;
    getTime(): [number, number];
    mapToTimeAndMemberId(member: GroupMember): {
        memberId: string;
        time: any;
    };
    sortByTime(a: Record<'time', number[]>, b: Record<'time', number[]>): number;
}
