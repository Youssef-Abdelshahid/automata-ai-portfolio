import { motion } from 'framer-motion';

const blobs = [
  {
    className:
      'left-[12%] top-[8%] h-[520px] w-[620px] bg-[radial-gradient(circle,rgba(161,96,235,.28),transparent_70%)]',
    animate: { x: [0, 60, -20, 0], y: [0, 30, 60, 0], scale: [1, 1.12, 1.04, 1] },
    duration: 26,
  },
  {
    className:
      'right-[8%] top-[2%] h-[480px] w-[560px] bg-[radial-gradient(circle,rgba(136,72,215,.22),transparent_70%)]',
    animate: { x: [0, -50, 20, 0], y: [0, 40, 10, 0], scale: [1, 1.08, 1.15, 1] },
    duration: 32,
  },
  {
    className:
      'left-1/2 top-[34%] h-[600px] w-[760px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(124,58,237,.16),transparent_70%)]',
    animate: { x: [0, 30, -30, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 1.02, 1] },
    duration: 38,
  },
  {
    className:
      'left-[20%] top-[120%] h-[520px] w-[680px] bg-[radial-gradient(circle,rgba(136,72,215,.12),transparent_70%)]',
    animate: { x: [0, 50, -10, 0], y: [0, -30, 30, 0], scale: [1, 1.12, 1, 1] },
    duration: 34,
  },
];

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-ink">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[90px] ${blob.className}`}
          animate={blob.animate}
          transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_30%,rgba(15,23,36,.5)_100%)]" />
    </div>
  );
}
