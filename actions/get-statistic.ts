import { auth } from '@clerk/nextjs';
import { Link } from '@prisma/client';
import prismadb from '@/lib/prismadb';
import { notFound } from 'next/navigation';

interface StatisticData {
  totalLinks: number;
  totalHits: number;
  topLink: Link | null;
  topCountry: string | undefined;
}

export const getStatistic = async (): Promise<StatisticData> => {
  const { userId } = auth();

  if (!userId) {
    notFound();
  }

  const [totalLinks, totalHits, topLink, country] = await prismadb.$transaction([
    prismadb.link.count({
      where: { userId },
    }),
    prismadb.log.count({
      where: {
        link: {
          userId,
        },
      },
    }),
    prismadb.link.findFirst({
      where: { userId },
      orderBy: { click: 'desc' },
    }),
    prismadb.log.groupBy({
      take: 1,
      by: ['countryCode'],
      where: {
        link: {
          userId,
        },
      },
      _count: {
        _all: true,
      },
      orderBy: {
        _count: {
          countryCode: 'desc',
        },
      },
    }),
  ]);

  const regionName = new Intl.DisplayNames(['en'], { type: 'region' });

  // ✅ Safely handle missing or invalid country codes
  const rawCode = country[0]?.countryCode;
  const code =
    typeof rawCode === 'string' ? rawCode.toUpperCase().trim() : null;

  const isValidCode = code && /^[A-Z]{2}$/.test(code);
  const topCountry = isValidCode ? regionName.of(code!) : 'N/A';

  return {
    totalLinks,
    totalHits,
    topLink,
    topCountry,
  };
};
