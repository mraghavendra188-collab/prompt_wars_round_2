import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { FAQItem } from '../components/FAQItem'

describe('FAQItem', () => {
  const props = { id: 'test', question: 'What is voting?', answer: 'Voting is a right.' }

  it('answer is hidden by default', () => {
    render(<FAQItem {...props} />)
    expect(screen.getByText(props.answer).closest('[hidden]')).toBeInTheDocument()
  })
  it('answer is visible after click', async () => {
    render(<FAQItem {...props} />)
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText(props.answer).closest('[hidden]')).not.toBeInTheDocument()
  })
  it('aria-expanded is false by default', () => {
    render(<FAQItem {...props} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false')
  })
  it('aria-expanded is true after click', async () => {
    render(<FAQItem {...props} />)
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true')
  })
  it('answer panel has role region', () => {
    render(<FAQItem {...props} />)
    expect(screen.getByRole('region', { hidden: true })).toBeInTheDocument()
  })
})
