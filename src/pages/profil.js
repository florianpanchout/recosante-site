import React from 'react'

import ProfileProvider from 'src/components/providers/ProfileProvider'
import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import FormWrapper from 'src/components/profile/FormWrapper'

export default function Profile(props) {
  return (
    <ProfileProvider>
      <Web title={'Profil'}>
        <Section tiny>
          <FormWrapper />
        </Section>
      </Web>
    </ProfileProvider>
  )
}
