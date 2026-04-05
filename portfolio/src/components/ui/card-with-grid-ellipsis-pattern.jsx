import { cn } from '../../lib/utils'
import { motion } from "framer-motion"

export function GridPatternCard({
  children,
  className,
  patternClassName,
  gradientClassName
}) {
  return (
    <motion.div
      className={cn(
        "border w-full min-h-[200px] rounded-md overflow-hidden",
        "bg-background",
        "border-border",
        "p-3",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <div
        className={cn(
          "size-full bg-repeat bg-[length:30px_30px]",
          "bg-grid-pattern-light dark:bg-grid-pattern",
          patternClassName
        )}>
        <div
          className={cn(
            "w-full min-h-[200px]",
    "bg-repeat bg-[length:24px_24px]",
    "bg-[radial-gradient(circle,_rgba(0,0,0,0.2)_1px,_transparent_1px)]",
    "dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_1px,_transparent_1px)]",
            gradientClassName
          )}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function GridPatternCardBody({
  className,
  ...props
}) {
  return (<div className={cn("text-left p-4 md:p-6", className)} {...props} />);
}