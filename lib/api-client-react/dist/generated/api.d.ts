import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AppearanceSettings, AppearanceSettingsUpdate, BlockedThread, Chat, ConversationSummary, HealthStatus, Message, MessageInput, SavedMessage, User, VanishModeInput } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetCurrentUserUrl: () => string;
/**
 * @summary Get the current profile
 */
export declare const getCurrentUser: (options?: Parameters<typeof customFetch>[1]) => Promise<User>;
export declare const getGetCurrentUserQueryKey: () => readonly ["/api/me"];
export declare const getGetCurrentUserQueryOptions: <TData = Awaited<ReturnType<typeof getCurrentUser>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCurrentUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCurrentUser>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCurrentUserQueryResult = NonNullable<Awaited<ReturnType<typeof getCurrentUser>>>;
export type GetCurrentUserQueryError = ErrorType<unknown>;
/**
 * @summary Get the current profile
 */
export declare function useGetCurrentUser<TData = Awaited<ReturnType<typeof getCurrentUser>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCurrentUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListChatsUrl: () => string;
/**
 * @summary List the user's conversations
 */
export declare const listChats: (options?: Parameters<typeof customFetch>[1]) => Promise<Chat[]>;
export declare const getListChatsQueryKey: () => readonly ["/api/chats"];
export declare const getListChatsQueryOptions: <TData = Awaited<ReturnType<typeof listChats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listChats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listChats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListChatsQueryResult = NonNullable<Awaited<ReturnType<typeof listChats>>>;
export type ListChatsQueryError = ErrorType<unknown>;
/**
 * @summary List the user's conversations
 */
export declare function useListChats<TData = Awaited<ReturnType<typeof listChats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listChats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListChatMessagesUrl: (chatId: string) => string;
/**
 * @summary Get messages for a conversation
 */
export declare const listChatMessages: (chatId: string, options?: Parameters<typeof customFetch>[1]) => Promise<Message[]>;
export declare const getListChatMessagesQueryKey: (chatId: string) => readonly [`/api/chats/${string}/messages`];
export declare const getListChatMessagesQueryOptions: <TData = Awaited<ReturnType<typeof listChatMessages>>, TError = ErrorType<unknown>>(chatId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listChatMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listChatMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListChatMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof listChatMessages>>>;
export type ListChatMessagesQueryError = ErrorType<unknown>;
/**
 * @summary Get messages for a conversation
 */
export declare function useListChatMessages<TData = Awaited<ReturnType<typeof listChatMessages>>, TError = ErrorType<unknown>>(chatId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listChatMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSendMessageUrl: (chatId: string) => string;
/**
 * @summary Send a message
 */
export declare const sendMessage: (chatId: string, messageInput: MessageInput, options?: Parameters<typeof customFetch>[1]) => Promise<Message>;
export declare const getSendMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        chatId: string;
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
    chatId: string;
    data: BodyType<MessageInput>;
}, TContext>;
export type SendMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendMessage>>>;
export type SendMessageMutationBody = BodyType<MessageInput>;
export type SendMessageMutationError = ErrorType<unknown>;
/**
* @summary Send a message
*/
export declare const useSendMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        chatId: string;
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendMessage>>, TError, {
    chatId: string;
    data: BodyType<MessageInput>;
}, TContext>;
export declare const getToggleVanishModeUrl: (chatId: string) => string;
/**
 * @summary Toggle vanish mode
 */
export declare const toggleVanishMode: (chatId: string, vanishModeInput: VanishModeInput, options?: Parameters<typeof customFetch>[1]) => Promise<Chat>;
export declare const getToggleVanishModeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof toggleVanishMode>>, TError, {
        chatId: string;
        data: BodyType<VanishModeInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof toggleVanishMode>>, TError, {
    chatId: string;
    data: BodyType<VanishModeInput>;
}, TContext>;
export type ToggleVanishModeMutationResult = NonNullable<Awaited<ReturnType<typeof toggleVanishMode>>>;
export type ToggleVanishModeMutationBody = BodyType<VanishModeInput>;
export type ToggleVanishModeMutationError = ErrorType<unknown>;
/**
* @summary Toggle vanish mode
*/
export declare const useToggleVanishMode: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof toggleVanishMode>>, TError, {
        chatId: string;
        data: BodyType<VanishModeInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof toggleVanishMode>>, TError, {
    chatId: string;
    data: BodyType<VanishModeInput>;
}, TContext>;
export declare const getSaveMessageUrl: (messageId: string) => string;
/**
 * @summary Save a message
 */
export declare const saveMessage: (messageId: string, options?: Parameters<typeof customFetch>[1]) => Promise<SavedMessage>;
export declare const getSaveMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveMessage>>, TError, {
        messageId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof saveMessage>>, TError, {
    messageId: string;
}, TContext>;
export type SaveMessageMutationResult = NonNullable<Awaited<ReturnType<typeof saveMessage>>>;
export type SaveMessageMutationError = ErrorType<unknown>;
/**
* @summary Save a message
*/
export declare const useSaveMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveMessage>>, TError, {
        messageId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof saveMessage>>, TError, {
    messageId: string;
}, TContext>;
export declare const getUnsaveMessageUrl: (messageId: string) => string;
/**
 * @summary Remove a message from saved messages
 */
export declare const unsaveMessage: (messageId: string, options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getUnsaveMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof unsaveMessage>>, TError, {
        messageId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof unsaveMessage>>, TError, {
    messageId: string;
}, TContext>;
export type UnsaveMessageMutationResult = NonNullable<Awaited<ReturnType<typeof unsaveMessage>>>;
export type UnsaveMessageMutationError = ErrorType<unknown>;
/**
* @summary Remove a message from saved messages
*/
export declare const useUnsaveMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof unsaveMessage>>, TError, {
        messageId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof unsaveMessage>>, TError, {
    messageId: string;
}, TContext>;
export declare const getListSavedMessagesUrl: () => string;
/**
 * @summary List saved messages
 */
export declare const listSavedMessages: (options?: Parameters<typeof customFetch>[1]) => Promise<SavedMessage[]>;
export declare const getListSavedMessagesQueryKey: () => readonly ["/api/saved-messages"];
export declare const getListSavedMessagesQueryOptions: <TData = Awaited<ReturnType<typeof listSavedMessages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSavedMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listSavedMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListSavedMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof listSavedMessages>>>;
export type ListSavedMessagesQueryError = ErrorType<unknown>;
/**
 * @summary List saved messages
 */
export declare function useListSavedMessages<TData = Awaited<ReturnType<typeof listSavedMessages>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSavedMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListBlockedThreadsUrl: () => string;
/**
 * @summary List blocked message threads
 */
export declare const listBlockedThreads: (options?: Parameters<typeof customFetch>[1]) => Promise<BlockedThread[]>;
export declare const getListBlockedThreadsQueryKey: () => readonly ["/api/blocked-messages"];
export declare const getListBlockedThreadsQueryOptions: <TData = Awaited<ReturnType<typeof listBlockedThreads>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listBlockedThreads>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listBlockedThreads>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListBlockedThreadsQueryResult = NonNullable<Awaited<ReturnType<typeof listBlockedThreads>>>;
export type ListBlockedThreadsQueryError = ErrorType<unknown>;
/**
 * @summary List blocked message threads
 */
export declare function useListBlockedThreads<TData = Awaited<ReturnType<typeof listBlockedThreads>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listBlockedThreads>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getBlockUserUrl: (userId: string) => string;
/**
 * @summary Block a user
 */
export declare const blockUser: (userId: string, options?: Parameters<typeof customFetch>[1]) => Promise<BlockedThread>;
export declare const getBlockUserMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof blockUser>>, TError, {
        userId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof blockUser>>, TError, {
    userId: string;
}, TContext>;
export type BlockUserMutationResult = NonNullable<Awaited<ReturnType<typeof blockUser>>>;
export type BlockUserMutationError = ErrorType<unknown>;
/**
* @summary Block a user
*/
export declare const useBlockUser: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof blockUser>>, TError, {
        userId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof blockUser>>, TError, {
    userId: string;
}, TContext>;
export declare const getUnblockUserUrl: (userId: string) => string;
/**
 * @summary Unblock a user
 */
export declare const unblockUser: (userId: string, options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getUnblockUserMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof unblockUser>>, TError, {
        userId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof unblockUser>>, TError, {
    userId: string;
}, TContext>;
export type UnblockUserMutationResult = NonNullable<Awaited<ReturnType<typeof unblockUser>>>;
export type UnblockUserMutationError = ErrorType<unknown>;
/**
* @summary Unblock a user
*/
export declare const useUnblockUser: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof unblockUser>>, TError, {
        userId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof unblockUser>>, TError, {
    userId: string;
}, TContext>;
export declare const getGetAppearanceSettingsUrl: () => string;
/**
 * @summary Get appearance settings
 */
export declare const getAppearanceSettings: (options?: Parameters<typeof customFetch>[1]) => Promise<AppearanceSettings>;
export declare const getGetAppearanceSettingsQueryKey: () => readonly ["/api/settings"];
export declare const getGetAppearanceSettingsQueryOptions: <TData = Awaited<ReturnType<typeof getAppearanceSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAppearanceSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAppearanceSettings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAppearanceSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getAppearanceSettings>>>;
export type GetAppearanceSettingsQueryError = ErrorType<unknown>;
/**
 * @summary Get appearance settings
 */
export declare function useGetAppearanceSettings<TData = Awaited<ReturnType<typeof getAppearanceSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAppearanceSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateAppearanceSettingsUrl: () => string;
/**
 * @summary Update appearance settings
 */
export declare const updateAppearanceSettings: (appearanceSettingsUpdate: AppearanceSettingsUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<AppearanceSettings>;
export declare const getUpdateAppearanceSettingsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAppearanceSettings>>, TError, {
        data: BodyType<AppearanceSettingsUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAppearanceSettings>>, TError, {
    data: BodyType<AppearanceSettingsUpdate>;
}, TContext>;
export type UpdateAppearanceSettingsMutationResult = NonNullable<Awaited<ReturnType<typeof updateAppearanceSettings>>>;
export type UpdateAppearanceSettingsMutationBody = BodyType<AppearanceSettingsUpdate>;
export type UpdateAppearanceSettingsMutationError = ErrorType<unknown>;
/**
* @summary Update appearance settings
*/
export declare const useUpdateAppearanceSettings: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAppearanceSettings>>, TError, {
        data: BodyType<AppearanceSettingsUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAppearanceSettings>>, TError, {
    data: BodyType<AppearanceSettingsUpdate>;
}, TContext>;
export declare const getGetConversationSummaryUrl: () => string;
/**
 * @summary Get a small conversation summary
 */
export declare const getConversationSummary: (options?: Parameters<typeof customFetch>[1]) => Promise<ConversationSummary>;
export declare const getGetConversationSummaryQueryKey: () => readonly ["/api/summary"];
export declare const getGetConversationSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getConversationSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConversationSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getConversationSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetConversationSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getConversationSummary>>>;
export type GetConversationSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Get a small conversation summary
 */
export declare function useGetConversationSummary<TData = Awaited<ReturnType<typeof getConversationSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConversationSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map