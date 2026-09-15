export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  industry: string;
  avatar: string;
  quote: string;
  rating: number;
  projectType: string;
  gradient: string;
  companyLogo?: string;
}

export interface TestimonialsProps {
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
}
