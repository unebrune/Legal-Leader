import {
  Compass,
  Layers,
  ShieldOff,
  FileText,
  BadgeCheck,
  Radar,
  type LucideProps,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  compass: Compass,
  layers: Layers,
  "shield-off": ShieldOff,
  "file-text": FileText,
  "badge-check": BadgeCheck,
  radar: Radar,
};

export default function ServiceIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = ICON_MAP[name] ?? FileText;
  return <Icon {...props} />;
}
