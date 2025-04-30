// app/components/VideoPlayer.tsx
interface VideoPlayerProps {
  src: string; // e.g., a YouTube embed URL
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  return (
    <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={src}
        allowFullScreen
      />
    </div>
  );
}
