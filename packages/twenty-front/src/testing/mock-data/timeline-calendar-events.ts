import {
  TimelineCalendarEvent,
  TimelineCalendarEventVisibility,
} from '~/generated-metadata/graphql';

export const mockedTimelineCalendarEvents: TimelineCalendarEvent[] = [
  {
    __typename: 'TimelineCalendarEvent',
    id: '20202020-2e3f-45a2-ab16-b580ff4f83e7',
    title: 'Jane',
    description: 'Tests techniques',
    location: '',
    startsAt: '2024-05-16T12:00:00.000Z',
    endsAt: '2024-05-16T13:00:00.000Z',
    conferenceLink: {
      url: 'https://meet.google.com/xxx-xxx-xxx',
      label: 'Rejoindre la visio',
    },
    conferenceSolution: 'GOOGLE_MEET',
    isCanceled: false,
    visibility: TimelineCalendarEventVisibility.ShareEverything,
    isFullDay: false,
    participants: [
      {
        __typename: 'TimelineCalendarEventParticipant',
        personId: null,
        workspaceMemberId: '20202020-78c5-4cbb-87a8-f9cd3ad4d8af',
        firstName: 'Tim',
        lastName: 'Apple',
        displayName: 'Tim',
        avatarUrl: '',
        handle: 'tim@apple.dev',
      },
      {
        __typename: 'TimelineCalendarEventParticipant',
        personId: null,
        workspaceMemberId: '20202020-3cf7-453e-a5f4-28f8412e70f0',
        firstName: 'Jane',
        lastName: 'Doe',
        displayName: 'Jane',
        avatarUrl: '',
        handle: 'jane@apple.dev',
      },
    ],
  },
  {
    __typename: 'TimelineCalendarEvent',
    id: '20202020-1020-42d6-8444-541f5e57a7e5',
    title: '',
    description: '',
    location: '',
    startsAt: '2024-05-08T12:00:00.000Z',
    endsAt: '2024-05-08T12:25:00.000Z',
    isFullDay: false,
    conferenceLink: {
      url: 'https://meet.google.com/xxx-xxx-xxx',
      label: 'Rejoindre la visio',
    },
    conferenceSolution: 'GOOGLE_MEET',
    isCanceled: false,
    visibility: TimelineCalendarEventVisibility.Metadata,
    participants: [
      {
        __typename: 'TimelineCalendarEventParticipant',
        personId: null,
        workspaceMemberId: '20202020-78c5-4cbb-87a8-f9cd3ad4d8af',
        firstName: 'Tim',
        lastName: 'Apple',
        displayName: 'Tim',
        avatarUrl: '',
        handle: 'tim@apple.dev',
      },
    ],
  },
  {
    __typename: 'TimelineCalendarEvent',
    id: '20202020-fa61-4d82-b47f-90cca16514e3',
    title: '',
    description: '',
    location: '',
    startsAt: '2024-05-06T12:00:00.000Z',
    endsAt: '2024-05-06T12:25:00.000Z',
    isFullDay: false,
    conferenceLink: {
      url: 'https://meet.google.com/xxx-xxx-xxx',
      label: 'Rejoindre la visio',
    },
    conferenceSolution: 'GOOGLE_MEET',
    isCanceled: false,
    visibility: TimelineCalendarEventVisibility.Metadata,
    participants: [
      {
        __typename: 'TimelineCalendarEventParticipant',
        personId: null,
        workspaceMemberId: '20202020-78c5-4cbb-87a8-f9cd3ad4d8af',
        firstName: 'Tim',
        lastName: 'Apple',
        displayName: 'Tim',
        avatarUrl: '',
        handle: 'tim@apple.dev',
      },
    ],
  },
];
