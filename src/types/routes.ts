export type Routes = {
  path: `/`;
  parts: 1;
  method: 'GET';
  response: undefined;
} | {
  path: `/auth/accounts/register`;
  parts: 3;
  method: 'POST';
  response: {
    id: number;
    username: string;
    avatar?: string | null;
    password: string;
    email: string;
    badges: number;
    verified: boolean;
  };
} | {
  path: `/auth/accounts/verify/{user_id}/${string}`;
  parts: 5;
  method: 'GET';
  response: undefined;
} | {
  path: `/auth/sessions/login`;
  parts: 3;
  method: 'POST';
  response: { id: number; token: string; user_id: number };
} | {
  path: `/auth/sessions/${string}/{token}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/auth/sessions/${string}`;
  parts: 3;
  method: 'GET';
  response: { id: number; token: string; user_id: number };
} | {
  path: `/auth/sessions/`;
  parts: 3;
  method: 'GET';
  response: { id: number; token: string; user_id: number }[];
} | {
  path: `/users/@me`;
  parts: 2;
  method: 'GET';
  response: {
    id: number;
    username: string;
    avatar?: string | null;
    password: string;
    email: string;
    badges: number;
    verified: boolean;
  };
} | {
  path: `/users/{user_id}`;
  parts: 2;
  method: 'GET';
  response: {
    id: number;
    username: string;
    avatar?: string | null;
    password: string;
    email: string;
    badges: number;
    verified: boolean;
  };
} | {
  path: `/channels/${string}`;
  parts: 2;
  method: 'GET';
  response: {
    id: number;
    type: 'Direct' | 'Group' | 'Text' | 'Voice' | 'Category' | 'Unknown';
    name?: string | null;
    recipients?: number[] | null;
    overwrites?: {
      id: number;
      type: 'Role' | 'Member';
      allow: number;
      deny: number;
    }[] | null;
    server_id?: number | null;
    parent_id?: number | null;
    owner_id?: number | null;
    topic?: string | null;
    permissions?: (number) | null;
  };
} | {
  path: `/channels/`;
  parts: 2;
  method: 'GET';
  response: {
    id: number;
    type: 'Direct' | 'Group' | 'Text' | 'Voice' | 'Category' | 'Unknown';
    name?: string | null;
    recipients?: number[] | null;
    overwrites?: {
      id: number;
      type: 'Role' | 'Member';
      allow: number;
      deny: number;
    }[] | null;
    server_id?: number | null;
    parent_id?: number | null;
    owner_id?: number | null;
    topic?: string | null;
    permissions?: (number) | null;
  }[];
} | {
  path: `/channels/`;
  parts: 2;
  method: 'POST';
  response: {
    id: number;
    type: 'Direct' | 'Group' | 'Text' | 'Voice' | 'Category' | 'Unknown';
    name?: string | null;
    recipients?: number[] | null;
    overwrites?: {
      id: number;
      type: 'Role' | 'Member';
      allow: number;
      deny: number;
    }[] | null;
    server_id?: number | null;
    parent_id?: number | null;
    owner_id?: number | null;
    topic?: string | null;
    permissions?: (number) | null;
  };
} | {
  path: `/channels/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}/${string}`;
  parts: 3;
  method: 'POST';
  response: undefined;
} | {
  path: `/channels/${string}/${string}`;
  parts: 3;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}/invite`;
  parts: 3;
  method: 'POST';
  response: {
    id: number;
    code: string;
    uses: number;
    inviter_id: number;
    channel_id: number;
    server_id?: number | null;
  };
} | {
  path: `/messages/`;
  parts: 2;
  method: 'POST';
  response: {
    id: number;
    content?: string | null;
    channel_id: number;
    author_id: number;
    edited_at?: number | null;
  };
} | {
  path: `/messages/${string}`;
  parts: 2;
  method: 'GET';
  response: {
    id: number;
    content?: string | null;
    channel_id: number;
    author_id: number;
    edited_at?: number | null;
  };
} | {
  path: `/messages/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/messages/${string}`;
  parts: 2;
  method: 'PATCH';
  response: {
    id: number;
    content?: string | null;
    channel_id: number;
    author_id: number;
    edited_at?: number | null;
  };
} | {
  path: `/bots/${string}`;
  parts: 2;
  method: 'GET';
  response: {
    id: number;
    username: string;
    owner_id: number;
    verified: boolean;
  };
} | {
  path: `/bots/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/bots/`;
  parts: 2;
  method: 'GET';
  response: {
    id: number;
    username: string;
    owner_id: number;
    verified: boolean;
  }[];
} | {
  path: `/bots/`;
  parts: 2;
  method: 'POST';
  response: {
    id: number;
    username: string;
    owner_id: number;
    verified: boolean;
  };
} | {
  path: `/invites/${string}`;
  parts: 2;
  method: 'GET';
  response: {
    id: number;
    code: string;
    uses: number;
    inviter_id: number;
    channel_id: number;
    server_id?: number | null;
  };
} | {
  path: `/invites/${string}`;
  parts: 2;
  method: 'POST';
  response: undefined;
} | {
  path: `/servers/`;
  parts: 2;
  method: 'GET';
  response: {
    id: number;
    name: string;
    description?: string | null;
    icon?: string | null;
    banner?: string | null;
    owner_id: number;
    permissions: number;
  }[];
} | {
  path: `/servers/`;
  parts: 2;
  method: 'POST';
  response: {
    id: number;
    name: string;
    description?: string | null;
    icon?: string | null;
    banner?: string | null;
    owner_id: number;
    permissions: number;
  };
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'GET';
  response: {
    id: number;
    name: string;
    description?: string | null;
    icon?: string | null;
    banner?: string | null;
    owner_id: number;
    permissions: number;
  };
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/channels/${string}/${string}`;
  parts: 4;
  method: 'GET';
  response: {
    id: number;
    type: 'Direct' | 'Group' | 'Text' | 'Voice' | 'Category' | 'Unknown';
    name?: string | null;
    recipients?: number[] | null;
    overwrites?: {
      id: number;
      type: 'Role' | 'Member';
      allow: number;
      deny: number;
    }[] | null;
    server_id?: number | null;
    parent_id?: number | null;
    owner_id?: number | null;
    topic?: string | null;
    permissions?: (number) | null;
  };
} | {
  path: `/servers/channels/${string}/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/channels/${string}/${string}`;
  parts: 4;
  method: 'PATCH';
  response: {
    id: number;
    type: 'Direct' | 'Group' | 'Text' | 'Voice' | 'Category' | 'Unknown';
    name?: string | null;
    recipients?: number[] | null;
    overwrites?: {
      id: number;
      type: 'Role' | 'Member';
      allow: number;
      deny: number;
    }[] | null;
    server_id?: number | null;
    parent_id?: number | null;
    owner_id?: number | null;
    topic?: string | null;
    permissions?: (number) | null;
  };
} | {
  path: `/servers/channels/${string}`;
  parts: 3;
  method: 'GET';
  response: {
    id: number;
    type: 'Direct' | 'Group' | 'Text' | 'Voice' | 'Category' | 'Unknown';
    name?: string | null;
    recipients?: number[] | null;
    overwrites?: {
      id: number;
      type: 'Role' | 'Member';
      allow: number;
      deny: number;
    }[] | null;
    server_id?: number | null;
    parent_id?: number | null;
    owner_id?: number | null;
    topic?: string | null;
    permissions?: (number) | null;
  }[];
} | {
  path: `/servers/channels/${string}`;
  parts: 3;
  method: 'POST';
  response: {
    id: number;
    type: 'Direct' | 'Group' | 'Text' | 'Voice' | 'Category' | 'Unknown';
    name?: string | null;
    recipients?: number[] | null;
    overwrites?: {
      id: number;
      type: 'Role' | 'Member';
      allow: number;
      deny: number;
    }[] | null;
    server_id?: number | null;
    parent_id?: number | null;
    owner_id?: number | null;
    topic?: string | null;
    permissions?: (number) | null;
  };
} | {
  path: `/servers/channels/${string}/${string}/invite`;
  parts: 5;
  method: 'POST';
  response: {
    id: number;
    code: string;
    uses: number;
    inviter_id: number;
    channel_id: number;
    server_id?: number | null;
  };
} | {
  path: `/servers/members/${string}/${string}`;
  parts: 4;
  method: 'GET';
  response: {
    id: number;
    nickname?: string | null;
    joined_at: number;
    server_id: number;
    roles: number[];
  };
} | {
  path: `/servers/members/${string}/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/members/${string}/${string}`;
  parts: 4;
  method: 'PATCH';
  response: {
    id: number;
    nickname?: string | null;
    joined_at: number;
    server_id: number;
    roles: number[];
  };
} | {
  path: `/servers/members/${string}`;
  parts: 3;
  method: 'GET';
  response: {
    id: number;
    nickname?: string | null;
    joined_at: number;
    server_id: number;
    roles: number[];
  }[];
} | {
  path: `/servers/invites/${string}/${string}`;
  parts: 4;
  method: 'GET';
  response: {
    id: number;
    code: string;
    uses: number;
    inviter_id: number;
    channel_id: number;
    server_id?: number | null;
  };
} | {
  path: `/servers/invites/${string}/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/invites/${string}`;
  parts: 3;
  method: 'GET';
  response: {
    id: number;
    code: string;
    uses: number;
    inviter_id: number;
    channel_id: number;
    server_id?: number | null;
  }[];
} | {
  path: `/servers/roles/${string}/${string}`;
  parts: 4;
  method: 'GET';
  response: {
    id: number;
    name: string;
    permissions: number;
    color: number;
    hoist: boolean;
    server_id: number;
  };
} | {
  path: `/servers/roles/${string}/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/roles/${string}/${string}`;
  parts: 4;
  method: 'PATCH';
  response: {
    id: number;
    name: string;
    permissions: number;
    color: number;
    hoist: boolean;
    server_id: number;
  };
} | {
  path: `/servers/roles/${string}`;
  parts: 3;
  method: 'GET';
  response: {
    id: number;
    name: string;
    permissions: number;
    color: number;
    hoist: boolean;
    server_id: number;
  }[];
} | {
  path: `/servers/roles/${string}`;
  parts: 3;
  method: 'POST';
  response: {
    id: number;
    name: string;
    permissions: number;
    color: number;
    hoist: boolean;
    server_id: number;
  };
};
export type GetRoutes = Extract<Routes, { method: 'GET' }>;
export type DeleteRoutes = Extract<Routes, { method: 'DELETE' }>;
export type PostRoutes = Extract<Routes, { method: 'POST' }>;
export type PatchRoutes = Extract<Routes, { method: 'PATCH' }>;
export type PutRoutes = Extract<Routes, { method: 'PUT' }>;
