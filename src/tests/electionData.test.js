import { describe, it, expect } from 'vitest'
import { TIMELINE_STEPS, FAQ_ITEMS, GLOSSARY_TERMS, VOTING_STEPS } from '../data/electionData'

describe('TIMELINE_STEPS', () => {
  it('has exactly 6 items', () => expect(TIMELINE_STEPS).toHaveLength(6))
  it('every item has required keys', () => {
    TIMELINE_STEPS.forEach(item => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('title')
      expect(item).toHaveProperty('description')
      expect(item).toHaveProperty('status')
      expect(item).toHaveProperty('badge')
    })
  })
  it('no duplicate ids', () => {
    const ids = TIMELINE_STEPS.map(i => i.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
  it('status values are valid', () => {
    const valid = ['done', 'upcoming', 'future']
    TIMELINE_STEPS.forEach(i => expect(valid).toContain(i.status))
  })
})

describe('FAQ_ITEMS', () => {
  it('has exactly 6 items', () => expect(FAQ_ITEMS).toHaveLength(6))
  it('every item has id, question, answer', () => {
    FAQ_ITEMS.forEach(item => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('question')
      expect(item).toHaveProperty('answer')
    })
  })
})

describe('GLOSSARY_TERMS', () => {
  it('has at least 10 items', () => expect(GLOSSARY_TERMS.length).toBeGreaterThanOrEqual(10))
})

describe('VOTING_STEPS', () => {
  it('has exactly 7 items', () => expect(VOTING_STEPS).toHaveLength(7))
})
