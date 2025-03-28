<template>
  <div class="grid">
    <div class="col-12">
      <div class="welcome-card">
        <div class="flex align-items-center mb-4">
          <img src="@/assets/images/adinkra-symbol.svg" alt="Logo" class="mr-3" style="width: 48px; height: 48px;" />
          <div>
            <h1 class="m-0 text-primary font-bold">Welcome, {{ authStore.user?.name }}!</h1>
            <p class="mt-2 mb-0 text-500">Explore and manage your platform resources</p>
          </div>
        </div>
        <div class="african-divider"></div>
      </div>
    </div>

    <!-- Statistics Cards -->
    <div class="col-12">
      <div class="grid dashboard-stats">
        <div class="col-12 md:col-6 lg:col-3">
          <div class="card">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">Total Users</span>
                <div class="text-900 font-medium text-xl">{{ stats.users }}</div>
              </div>
              <div class="flex align-items-center justify-content-center bg-primary-100 border-round"
                style="width: 2.5rem; height: 2.5rem">
                <i class="pi pi-users text-primary text-xl" />
              </div>
            </div>
            <span class="text-green-500 font-medium">
              <i class="pi pi-arrow-up"></i>
              <span class="ml-1">+2.5%</span>
            </span>
            <span class="text-500 ml-2">since last month</span>
          </div>
        </div>

        <div class="col-12 md:col-6 lg:col-3">
          <div class="card">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">Companies</span>
                <div class="text-900 font-medium text-xl">{{ stats.companies }}</div>
              </div>
              <div class="flex align-items-center justify-content-center bg-primary-100 border-round"
                style="width: 2.5rem; height: 2.5rem">
                <i class="pi pi-building text-primary text-xl" />
              </div>
            </div>
            <span class="text-green-500 font-medium">
              <i class="pi pi-arrow-up"></i>
              <span class="ml-1">+5.2%</span>
            </span>
            <span class="text-500 ml-2">since last month</span>
          </div>
        </div>

        <div class="col-12 md:col-6 lg:col-3">
          <div class="card">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">Active Jobs</span>
                <div class="text-900 font-medium text-xl">{{ stats.jobs || 45 }}</div>
              </div>
              <div class="flex align-items-center justify-content-center bg-primary-100 border-round"
                style="width: 2.5rem; height: 2.5rem">
                <i class="pi pi-briefcase text-primary text-xl" />
              </div>
            </div>
            <span class="text-green-500 font-medium">
              <i class="pi pi-arrow-up"></i>
              <span class="ml-1">+3.1%</span>
            </span>
            <span class="text-500 ml-2">since last month</span>
          </div>
        </div>

        <div class="col-12 md:col-6 lg:col-3">
          <div class="card">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">Applications</span>
                <div class="text-900 font-medium text-xl">{{ stats.applications || 124 }}</div>
              </div>
              <div class="flex align-items-center justify-content-center bg-primary-100 border-round"
                style="width: 2.5rem; height: 2.5rem">
                <i class="pi pi-file text-primary text-xl" />
              </div>
            </div>
            <span class="text-green-500 font-medium">
              <i class="pi pi-arrow-up"></i>
              <span class="ml-1">+7.6%</span>
            </span>
            <span class="text-500 ml-2">since last month</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="col-12 xl:col-6">
      <div class="card">
        <h5>Recent Activity</h5>
        <Timeline :value="recentActivity" class="mt-3">
          <template #content="slotProps">
            <div class="flex align-items-center">
              <div class="flex align-items-center justify-content-center bg-primary-100 border-round mr-3"
                style="width: 2rem; height: 2rem">
                <i :class="slotProps.item.icon" class="text-primary text-lg" />
              </div>
              <div>
                <span class="text-900 font-medium block">{{ slotProps.item.title }}</span>
                <p class="text-500 mt-1 mb-0">{{ slotProps.item.description }}</p>
                <small class="text-500">{{ slotProps.item.time }}</small>
              </div>
            </div>
          </template>
        </Timeline>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="col-12 xl:col-6">
      <div class="card">
        <h5>Quick Actions</h5>
        <div class="grid mt-3">
          <div class="col-6 sm:col-3">
            <Button class="p-button-outlined w-full p-3 flex flex-column align-items-center"
              @click="router.push('/users')">
              <i class="pi pi-users text-xl mb-2"></i>
              <span>Manage Users</span>
            </Button>
          </div>
          <div class="col-6 sm:col-3">
            <Button class="p-button-outlined w-full p-3 flex flex-column align-items-center"
              @click="router.push('/companies')">
              <i class="pi pi-building text-xl mb-2"></i>
              <span>View Companies</span>
            </Button>
          </div>
          <div class="col-6 sm:col-3">
            <Button class="p-button-outlined w-full p-3 flex flex-column align-items-center">
              <i class="pi pi-briefcase text-xl mb-2"></i>
              <span>Post Job</span>
            </Button>
          </div>
          <div class="col-6 sm:col-3">
            <Button class="p-button-outlined w-full p-3 flex flex-column align-items-center">
              <i class="pi pi-cog text-xl mb-2"></i>
              <span>Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import axios from 'axios'
import Timeline from 'primevue/timeline'
import Button from 'primevue/button'

const router = useRouter()
const authStore = useAuthStore()

const stats = ref({
  users: 0,
  companies: 0,
  jobs: 45,
  applications: 124
})

const recentActivity = ref([
  {
    title: 'New Company Registered',
    description: 'Tech Solutions Inc. joined the platform',
    time: '2 hours ago',
    icon: 'pi pi-building'
  },
  {
    title: 'New Job Posted',
    description: 'Senior Developer position at Digital Innovations',
    time: '4 hours ago',
    icon: 'pi pi-briefcase'
  },
  {
    title: 'User Registration',
    description: 'John Doe created a new account',
    time: '6 hours ago',
    icon: 'pi pi-user'
  },
  {
    title: 'Application Submitted',
    description: 'New application for Frontend Developer position',
    time: '8 hours ago',
    icon: 'pi pi-file'
  }
])

const fetchStats = async () => {
  try {
    const [usersResponse, companiesResponse] = await Promise.all([
      axios.get('http://localhost:3000/api/users/count'),
      axios.get('http://localhost:3000/api/companies/count')
    ])

    stats.value = {
      ...stats.value,
      users: usersResponse.data.count,
      companies: companiesResponse.data.count
    }
  } catch (error) {
    console.error('Error fetching stats:', error)
  }
}

onMounted(() => {
  fetchStats()
})
</script>

<style scoped>
.welcome-card {
  background: linear-gradient(135deg, var(--surface-card) 0%, var(--surface-ground) 100%);
  padding: 2rem;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);
}

.text-primary {
  color: var(--primary-color) !important;
}

:deep(.p-timeline) {
  .p-timeline-event-opposite {
    display: none;
  }

  .p-timeline-event-content {
    padding: 0 1rem;
  }
}

.dashboard-stats .card {
  transition: all var(--transition-duration);
}

.dashboard-stats .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.p-button.p-button-outlined {
  border-color: var(--primary-color);
  color: var(--primary-color);

  &:hover {
    background: rgba(212, 175, 55, 0.1);
  }

  i {
    color: var(--primary-color);
  }
}
</style>