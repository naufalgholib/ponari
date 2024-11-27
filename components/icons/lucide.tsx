import * as React from "react"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
  strokeWidth?: number
}

export const ArrowLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
)
ArrowLeft.displayName = "ArrowLeft"

export const ChevronDown = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
)
ChevronDown.displayName = "ChevronDown"

export const Camera = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
)
Camera.displayName = "Camera"

// New Icons

export const Calendar = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 6h18M3 10h18M3 18h18M3 6v12a2 2 0 002 2h12a2 2 0 002-2V6" />
      <path d="M8 2v4M16 2v4" />
    </svg>
  )
)
Calendar.displayName = "Calendar"

export const Clock = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6h4" />
    </svg>
  )
)
Clock.displayName = "Clock"

export const User = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
)
User.displayName = "User"

export const Phone = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92c-1.08 1.48-2.36 2.68-3.74 3.48a12.99 12.99 0 0 1-7.1 0C4.36 19.6 2.08 18.4 1 16.92c-.18-.25-.27-.54-.27-.84 0-.67.56-1.2 1.22-1.2h1.62c.45 0 .87.16 1.2.45a9.95 9.95 0 0 0 5.49 2.19 9.95 9.95 0 0 0 5.49-2.19c.33-.29.75-.45 1.2-.45h1.62c.66 0 1.22.53 1.22 1.2 0 .3-.09.59-.27.84z" />
    </svg>
  )
)
Phone.displayName = "Phone"

export const MapPin = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 10c0 5-9 13-9 13S3 15 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  )
)
MapPin.displayName = "MapPin"
