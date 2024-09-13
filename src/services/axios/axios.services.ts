"use client"

import { api, apiAuth } from '@/services/axios/axios.interceptors';
import { UpdateSearchPreferencesData } from '@/shared/interfaces/SearchPreference.interfaces';
import { RecoveryDto, UserData, UserEmail } from "@/shared/interfaces/User.interfaces";

export async function apiGetRegions(limit: number, page: number) {
  return await api.get('/region/public/many', {
    params: {
      limit,
      page
    }
  })
}
export async function apiGetJobs(limit: number, page: number) {
  return await api.get('/job/public/many', {
    params: {
      limit,
      page
    }
  })
}

export async function apiGetIndustries(limit: number, page: number) {
  return await api.get('/industry/public/many', {
    params: {
      limit,
      page
    }
  })
}

export async function apiRegisterUser(dto: UserData) {
  return await api.post('/auth/user/register', dto);
}

export async function apiGetRecoverEmail(dto: UserEmail) {
  return await api.put('/auth/user/recover', dto);
}

export async function apiRecoverPassword(dto: RecoveryDto) {
  return await api.post('/auth/user/recover', dto);
}


export async function apiGetSearchPreference() {
  return await apiAuth.get('/search-preference');
}

export async function apiUpdateSearchPreference(UpdateSearchPreferencesData: UpdateSearchPreferencesData) {
  return await apiAuth.put('/search-preference', UpdateSearchPreferencesData);
}