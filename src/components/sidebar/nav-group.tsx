import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { tv } from 'tailwind-variants'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export type NavGroupRootProps = React.ComponentProps<'div'> & {
  children: React.ReactNode
  title: string
  icon?: React.ElementType
}

export function NavGroupRoot({
  title,
  icon: Icon,
  children,
}: NavGroupRootProps) {
  return (
    <AccordionItem value={title} className="border-none">
      <AccordionTrigger className="px-2 text-muted-foreground hover:text-foreground hover:no-underline">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="size-5" />}
          <span>{title}</span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="border-l border-muted-foreground/50 pb-0">
        {children}
      </AccordionContent>
    </AccordionItem>
  )
}

const item = tv({
  base: cn(
    'flex flex-col px-4 py-2 font-medium text-muted-foreground transition hover:text-foreground text-sm',
  ),

  variants: {
    variant: {
      active: cn(
        'text-foreground font-medium bg-gradient-to-l from-muted-foreground/10 rounded-md',
      ),
    },
  },
})

type NavGroupItemProps = React.ComponentPropsWithRef<'a'> & {
  href: string
}

export function NavGroupItem({ href, children }: NavGroupItemProps) {
  const pathname = usePathname()

  const variant = pathname === href ? 'active' : undefined

  return (
    <Link href={href} className={item({ variant })}>
      {children}
    </Link>
  )
}
