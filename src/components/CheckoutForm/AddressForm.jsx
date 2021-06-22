import React, { useState } from 'react'
import { InputLabel, SelectMenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
 
import { commerce } from '../../lib/commerce';

import FormInput from './CustomTextField';

const AddressForm = () => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSumbit=''>
          <Grid container spacing={3}>
            <FormInput required label="First Name" name="firstName" />
            <FormInput required label="Last Name" name="lastName" />
            <FormInput required label="Address" name="address1" />
            <FormInput required label="Email" name="email" />
            <FormInput required label="City" name="city" />
            <FormInput required label="Zip" name="zip" />

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Country
                </MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Subdivision
                </MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Option
                </MenuItem>
              </Select>
            </Grid>

          </Grid>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
