import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TimelineItem } from '../components/TimelineItem'

describe('TimelineItem', () => {
  it('renders the title', () => {
    render(<TimelineItem step={1} title="Registration Opens" description="Test" status="done" badge="Completed" />)
    expect(screen.getByText('Registration Opens')).toBeInTheDocument()
  })
  it('renders the badge', () => {
    render(<TimelineItem step={1} title="Test" description="Test" status="upcoming" badge="Upcoming" />)
    expect(screen.getByText('Upcoming')).toBeInTheDocument()
  })
  it('shows checkmark SVG when status is done', () => {
    render(<TimelineItem step={1} title="Test" description="Test" status="done" badge="Completed" />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
  it('shows step number when status is future', () => {
    render(<TimelineItem step={3} title="Test" description="Test" status="future" badge="Future" />)
    expect(screen.getByText('3')).toBeInTheDocument()
  })
  it('has correct aria-label', () => {
    render(<TimelineItem step={2} title="My Step" description="Desc" status="upcoming" badge="Upcoming" />)
    expect(screen.getByRole('article')).toHaveAttribute('aria-label', expect.stringContaining('My Step'))
  })
})
