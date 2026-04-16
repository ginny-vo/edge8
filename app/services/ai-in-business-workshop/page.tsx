import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { getServiceBySlug } from '@/data/services';

const service = getServiceBySlug('ai-in-business-workshop')!;

export const metadata: Metadata = {
  title: service.navTitle,
  description: service.summary,
};

export default function AIInBusinessWorkshopPage() {
  return <ServiceDetailPage service={service} />;
}
