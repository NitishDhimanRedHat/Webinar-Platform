// app/services/webinar.service.ts
import { Injectable } from '@angular/core';
import { Webinar, Speaker, Topic } from '../models/webinar';

@Injectable({
  providedIn: 'root'
})
export class WebinarService {
  getLiveWebinars(): Webinar[] {
    return [
      {
        id: 1,
        title: 'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthma',
        presenter: 'PDGI Indonesia',
        imageUrl: '/assets/pic1.png',
        duration: '24:50',
        credits: '2 Credits',
        status: 'live',
        viewers: 200,
        keyHighlights: 'Manage chronic and complex diseases',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: true,
        sponsor: 'Roche',
        followers: 2845,
        timeSincePosted: '30 min ago',
        showSocialStats: false,
        specialty: 'General Practitioner'
      },
      {
        id: 2,
        title: 'Virus is like any other respiratory virus that causes common',
        presenter: 'GSK',
        imageUrl: '/assets/pic2.png',
        duration: '24:50',
        credits: '1.5 Credits (Expiring in 23h 30m)',
        status: 'live',
        viewers: 200,
        keyHighlights: 'Manage chronic and complex diseases',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: false,
        showSocialStats: false,
        specialty: 'Allergy and Immunology'
      },
      {
        id: 3,
        title: 'Virus is like any other respiratory virus that causes common',
        presenter: 'Bayer',
        imageUrl: '/assets/banner7.png',
        duration: '24:50',
        credits: '2 Credits',
        status: 'live',
        viewers: 200,
        keyHighlights: 'Manage chronic and complex diseases',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: false,
        showSocialStats: false,
        specialty: 'Anaesthesiology'
      }
    ];
  }

  getUpcomingWebinars(): Webinar[] {
    return [
      {
        id: 5,
        title: 'The Covid19 Management of Parox Health caretine',
        presenter: 'PDGI Indonesia',
        imageUrl: '/assets/banner1.jpg',
        duration: '24:50',
        credits: '1.5 Credits (Expiring in 20 days)',
        status: 'upcoming',
        keyHighlights: 'Manage chronic and complex diseases',
        dateTime: '7 Jan 2025, 12:30 PM',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: true,
        sponsor: 'Roche',
        followers: 2845,
        timeSincePosted: '30 min ago',
        showSocialStats: false,
        specialty: 'General Practitioner'
      },
      {
        id: 6,
        title: 'Perspectives in The Covid19 Management of Parox Health',
        presenter: 'PDGI Indonesia',
        imageUrl: '/assets/banner3.png',
        duration: '24:50',
        credits: '2 Credits',
        status: 'upcoming',
        keyHighlights: 'Manage chronic and complex diseases',
        dateTime: '7 Jan 2025, 12:30 PM',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: true,
        sponsor: 'Roche',
        followers: 2845,
        timeSincePosted: '30 min ago',
        showSocialStats: false,
        specialty: 'Allergy and Immunology'
      },
      {
        id: 7,
        title: 'The Covid19 Management of Parox Health caretine',
        presenter: 'PDGI Indonesia',
        imageUrl: '/assets/banner4.jpg',
        duration: '24:50',
        credits: '2 Credits',
        status: 'upcoming',
        keyHighlights: 'Manage chronic and complex diseases',
        dateTime: '7 Jan 2025, 12:30 PM',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: true,
        sponsor: 'Roche',
        followers: 2845,
        timeSincePosted: '30 min ago',
        showSocialStats: false,
        specialty: 'Anaesthesiology'
      }
    ];
  }

  getContinueWatchingWebinars(): Webinar[] {
    return [
      {
        id: 8,
        title: 'New Perspectives in The Covid19 Management',
        presenter: 'Pfizer Indo...',
        imageUrl: '/assets/banner5.jpg',
        duration: '24:50',
        credits: '',
        status: 'recorded',
        keyHighlights: '',
        timeLeft: '10 min left',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: false,
        showSocialStats: false
      },
      {
        id: 9,
        title: 'Perspectives in The Covid19 Management',
        presenter: 'Bayer',
        imageUrl: '/assets/banner5.jpg',
        duration: '24:50',
        credits: '',
        status: 'recorded',
        keyHighlights: '',
        timeLeft: '10 min left',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: false,
        showSocialStats: false
      },
      {
        id: 10,
        title: 'New Perspectives in The 12',
        presenter: 'Bayer',
        imageUrl: '/assets/banner5.jpg',
        duration: '24:50',
        credits: '',
        status: 'recorded',
        keyHighlights: '',
        timeLeft: '10 min left',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: false,
        showSocialStats: false
      },
      {
        id: 11,
        title: 'New Perspectives in The Covid19 Management of Pa',
        presenter: 'Pfizer Doctor Indonesi',
        imageUrl: '/assets/banner5.jpg',
        duration: '24:50',
        credits: '',
        status: 'recorded',
        keyHighlights: '',
        timeLeft: '10 min left',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: false,
        showSocialStats: false
      }
    ];
  }

  getCardiologyWebinars(): Webinar[] {
    return [
      {
        id: 12,
        title: 'The Covid19 Management of Parox Health caretine',
        presenter: 'PDGI Indonesia',
        imageUrl: '/assets/banner5.jpg',
        duration: '24:50',
        credits: '2 Credits',
        status: 'live',
        keyHighlights: '',
        relatedGuideline: 'Diclofenac in post operative pain management',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: false,
        showSocialStats: false,
        specialty: 'General Practitioner'
      },
      {
        id: 13,
        title: 'New Perspectives in The Covid19 Management of Parox Health caretine...',
        presenter: 'PDGI Indonesia',
        imageUrl: '/assets/banner3.png',
        duration: '24:50',
        credits: '3 Credits',
        status: 'upcoming',
        keyHighlights: '',
        relatedGuideline: 'Diclofenac in post operative pain management',
        dateTime: '7 Jan 2025, 12:30 PM',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: false,
        showSocialStats: false,
        specialty: 'Allergy and Immunology'
      },
      {
        id: 14,
        title: 'Metapneumovirus is like any other respiratory virus that causes common',
        presenter: 'Bayer Indonesia',
        imageUrl: '/assets/pic2.png',
        duration: '24:50',
        credits: '1.5 Credits (till 15 Dec 2024)',
        status: 'live',
        viewers: 200,
        keyHighlights: '',
        relatedGuideline: 'Diclofenac in post operative pain management',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: false,
        showSocialStats: false,
        specialty: 'Anaesthesiology'
      }
    ];
  }

  getAllWebinars(): Webinar[] {
    const allWebinars = [
      ...this.getLiveWebinars(),
      ...this.getUpcomingWebinars(),
      ...this.getCardiologyWebinars()
    ];
    const uniqueWebinarsMap = new Map<number, Webinar>();
    allWebinars.forEach(webinar => {
      if (!uniqueWebinarsMap.has(webinar.id)) {
        uniqueWebinarsMap.set(webinar.id, webinar);
      }
    });
    return Array.from(uniqueWebinarsMap.values());
  }

  getFilteredWebinars(): Webinar[] {
    return [
      {
        id: 15,
        title: 'Perspectives in The Covid19 Management of Parox Health caretine',
        presenter: 'PDGI Indonesia',
        imageUrl: '/assets/banner6.png',
        duration: '24:50',
        credits: '1.5 Credits (Expiring in 23h 30m)',
        status: 'live',
        viewers: 800,
        keyHighlights: 'Manage chronic and complex diseases',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: true,
        sponsor: 'Roche',
        followers: 2845,
        timeSincePosted: '30 min ago',
        showSocialStats: true,
        specialty: 'General Practitioner'
      },
      {
        id: 16,
        title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
        presenter: 'PDGI Indonesia',
        imageUrl: '/assets/banner5.jpg',
        duration: '24:50',
        credits: '2 Credits (Expiring in 12 days)',
        status: 'live',
        viewers: 800,
        keyHighlights: 'Manage chronic and complex diseases',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: true,
        sponsor: 'Roche',
        followers: 2845,
        timeSincePosted: '30 min ago',
        showSocialStats: true,
        specialty: 'Allergy and Immunology'
      },
      {
        id: 17,
        title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
        presenter: 'PDGI Indonesia',
        imageUrl: '/assets/banner3.png',
        duration: '24:50',
        credits: '2 Credits (Expiring in 12 days)',
        status: 'live',
        viewers: 800,
        keyHighlights: 'Manage chronic and complex diseases',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: true,
        sponsor: 'Roche',
        followers: 2845,
        timeSincePosted: '30 min ago',
        showSocialStats: true,
        specialty: 'Anaesthesiology'
      },
      {
        id: 18,
        title: 'The New Findings Covid19 Management of Parox Health caretine',
        presenter: 'PDGI Indonesia',
        imageUrl: '/assets/banner4.jpg',
        duration: '24:50',
        credits: '2 Credits (Expiring in 12 days)',
        status: 'live',
        viewers: 800,
        keyHighlights: 'Manage chronic and complex diseases',
        likes: 20,
        comments: 12,
        views: 750,
        isSponsored: true,
        sponsor: 'Roche',
        followers: 2845,
        timeSincePosted: '30 min ago',
        showSocialStats: true,
        specialty: 'Clinical Nutrition'
      }
    ];
  }

  getSpeakers(): Speaker[] {
    return [
      {
        id: 1,
        name: 'Dr Chong wui',
        specialty: 'Gastrologist, General Phys...',
        isLive: true,
        imageUrl: '/assets/banner2.png'
      },
      {
        id: 2,
        name: 'Dr Wuyama Guramg',
        specialty: 'Gastroenterologist, Surgeon',
        imageUrl: '/assets/banner2.png'
      },
      {
        id: 3,
        name: 'Dr Wuyama Guramg',
        specialty: 'Gastroenterologist, Surgeon',
        imageUrl: '/assets/banner2.png'
      },
      {
        id: 4,
        name: 'Dr Wuyama Guramg',
        specialty: 'Cardiologist',
        imageUrl: '/assets/banner2.png'
      },
      {
        id: 5,
        name: 'Dr Shanya suian',
        specialty: 'Orthodontist',
        imageUrl: '/assets/banner2.png'
      }
    ];
  }

  getTopics(): Topic[] {
    return [
      { id: 1, name: 'Cardiologist', count: 4 },
      { id: 2, name: 'Emergency', count: 2 },
      { id: 3, name: 'General Medicine', count: 9 },
      { id: 4, name: 'General Medicine', count: 4 },
      { id: 5, name: 'Emergency Medicine', count: 8 },
      { id: 6, name: 'General Medicine', count: 4 },
      { id: 7, name: 'Emergency Medicine' },
      { id: 8, name: 'Emergency Medicine', count: 8 },
      { id: 9, name: 'Cardiologist', count: 4 },
      { id: 10, name: 'General Medicine', count: 9 },
      { id: 11, name: 'General Medicine', count: 4 },
      { id: 12, name: 'Emergency', count: 2 },
      { id: 13, name: 'Cardiologist', count: 4 },
      { id: 14, name: 'Emergency Medicine', count: 8 }
    ];
  }

  getBrowseTopics(): Topic[] {
    return [
      { id: 1, name: 'Cardiology', count: 12 },
      { id: 2, name: 'Pain Management', count: 4 },
      { id: 3, name: 'Primary care', count: 12 },
      { id: 4, name: 'Infection Medicine', count: 4 }
    ];
  }

  getSpecialties(): string[] {
    return [
      'Accupuncture',
      'Allergy and Immunology',
      'Anaesthesiology',
      'Clinical Nutrition',
      'General Practitioner'
    ];
  }
}
