// app/models/webinar.ts
export interface Webinar {
  id: number;
  title: string;
  presenter: string;
  imageUrl: string;
  duration: string;
  credits: string;
  status: 'live' | 'upcoming' | 'recorded';
  viewers?: number;
  keyHighlights: string;
  dateTime?: string;
  timeLeft?: string;
  likes: number;
  comments: number;
  views: number;
  isSponsored: boolean;
  sponsor?: string;
  followers?: number;
  timeSincePosted?: string;
  relatedGuideline?: string;
  category?: string;
  isFollowing?: boolean;
  showSocialStats: boolean;  // Changed to required boolean
  specialty?: string;  // Added specialty field

  // New properties for cardiology card
  logo1?: string;
  logo2?: string;
  speakerPhoto?: string;
  creditsExpiry?: string;
  organizationLogo?: string;

  // New properties for detailed webinar card
  sponsorLogo?: string;
  speakers?: { name: string; photoUrl: string; title: string }[];
  reposts?: number;
  timeAgo?: string;
}

// app/models/speaker.ts
export interface Speaker {
  id: number;
  name: string;
  specialty: string;
  isLive?: boolean;
  imageUrl?: string;
}

// app/models/topic.ts
export interface Topic {
  id: number;
  name: string;
  count?: number;
}