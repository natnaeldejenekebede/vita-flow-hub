import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Calendar, 
  Activity, 
  TrendingUp, 
  Clock, 
  Heart,
  UserCheck,
  AlertCircle,
  Plus,
  Eye,
  Edit,
  Trash2
} from "lucide-react";

interface DashboardProps {
  userRole: "admin" | "doctor" | "patient";
  userName: string;
}

interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
  status: "stable" | "critical" | "recovering";
}

interface Appointment {
  id: string;
  patientName: string;
  time: string;
  type: string;
  status: "scheduled" | "completed" | "cancelled";
}

export const Dashboard = ({ userRole, userName }: DashboardProps) => {
  const [patients] = useState<Patient[]>([
    {
      id: "1",
      name: "John Doe",
      age: 45,
      condition: "Hypertension",
      lastVisit: "2024-01-15",
      status: "stable"
    },
    {
      id: "2", 
      name: "Jane Smith",
      age: 32,
      condition: "Diabetes",
      lastVisit: "2024-01-14",
      status: "recovering"
    },
    {
      id: "3",
      name: "Mike Johnson", 
      age: 67,
      condition: "Heart Disease",
      lastVisit: "2024-01-13",
      status: "critical"
    }
  ]);

  const [appointments] = useState<Appointment[]>([
    {
      id: "1",
      patientName: "Sarah Wilson",
      time: "09:00 AM",
      type: "Consultation",
      status: "scheduled"
    },
    {
      id: "2",
      patientName: "Robert Brown", 
      time: "10:30 AM",
      type: "Follow-up",
      status: "scheduled"
    },
    {
      id: "3",
      patientName: "Emily Davis",
      time: "02:00 PM", 
      type: "Emergency",
      status: "completed"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "stable": 
      case "scheduled":
        return "bg-success text-success-foreground";
      case "critical":
        return "bg-destructive text-destructive-foreground";
      case "recovering":
      case "completed":
        return "bg-secondary text-secondary-foreground";
      case "cancelled":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  if (userRole === "admin") {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {userName}</p>
          </div>
          <Button className="medical-button">
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="medical-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">1,234</div>
              <p className="text-xs text-success">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="medical-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Doctors</CardTitle>
              <UserCheck className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">45</div>
              <p className="text-xs text-success">+3 new this month</p>
            </CardContent>
          </Card>

          <Card className="medical-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Appointments Today</CardTitle>
              <Calendar className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">89</div>
              <p className="text-xs text-muted-foreground">Across all departments</p>
            </CardContent>
          </Card>

          <Card className="medical-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Activity className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">98%</div>
              <Progress value={98} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="medical-card">
            <CardHeader>
              <CardTitle>Recent Registrations</CardTitle>
              <CardDescription>New patients and staff members</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {patients.slice(0, 3).map((patient) => (
                <div key={patient.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{patient.name}</p>
                    <p className="text-sm text-muted-foreground">Patient • Age {patient.age}</p>
                  </div>
                  <Badge variant="outline">New</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="medical-card">
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>Important notifications and warnings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-warning" />
                <div>
                  <p className="font-medium">Server backup scheduled</p>
                  <p className="text-sm text-muted-foreground">Tonight at 2:00 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <div>
                  <p className="font-medium">Database maintenance required</p>
                  <p className="text-sm text-muted-foreground">Schedule maintenance window</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (userRole === "doctor") {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Doctor Dashboard</h1>
            <p className="text-muted-foreground">Good morning, {userName}</p>
          </div>
          <Button className="medical-button">
            <Plus className="h-4 w-4 mr-2" />
            New Prescription
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="medical-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">8</div>
              <p className="text-xs text-muted-foreground">Next: 9:00 AM</p>
            </CardContent>
          </Card>

          <Card className="medical-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Patients</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">156</div>
              <p className="text-xs text-success">+5 new this week</p>
            </CardContent>
          </Card>

          <Card className="medical-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical Patients</CardTitle>
              <AlertCircle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">3</div>
              <p className="text-xs text-muted-foreground">Require immediate attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule & Patients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="medical-card">
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your appointments for today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{appointment.patientName}</p>
                      <p className="text-sm text-muted-foreground">{appointment.time} • {appointment.type}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(appointment.status)}>
                    {appointment.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="medical-card">
            <CardHeader>
              <CardTitle>Recent Patients</CardTitle>
              <CardDescription>Patients requiring follow-up</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {patients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium">{patient.name}</p>
                    <p className="text-sm text-muted-foreground">{patient.condition} • Last visit: {patient.lastVisit}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(patient.status)}>
                      {patient.status}
                    </Badge>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Patient Dashboard
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Patient Portal</h1>
          <p className="text-muted-foreground">Welcome back, {userName}</p>
        </div>
        <Button className="medical-button">
          <Calendar className="h-4 w-4 mr-2" />
          Book Appointment
        </Button>
      </div>

      {/* Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="medical-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-primary">Jan 20, 2024</div>
            <p className="text-xs text-muted-foreground">10:30 AM with Dr. Smith</p>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Health Score</CardTitle>
            <Heart className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">85%</div>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Prescriptions</CardTitle>
            <Activity className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">3</div>
            <p className="text-xs text-warning">1 needs refill</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="medical-card">
          <CardHeader>
            <CardTitle>Recent Visits</CardTitle>
            <CardDescription>Your latest medical appointments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div>
                <p className="font-medium">General Checkup</p>
                <p className="text-sm text-muted-foreground">Dr. Johnson • Jan 10, 2024</p>
              </div>
              <Badge className="bg-success text-success-foreground">Completed</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div>
                <p className="font-medium">Blood Test</p>
                <p className="text-sm text-muted-foreground">Lab • Jan 8, 2024</p>
              </div>
              <Badge className="bg-success text-success-foreground">Results Ready</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div>
                <p className="font-medium">Cardiology Consultation</p>
                <p className="text-sm text-muted-foreground">Dr. Wilson • Jan 5, 2024</p>
              </div>
              <Badge className="bg-success text-success-foreground">Completed</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-card">
          <CardHeader>
            <CardTitle>Health Reminders</CardTitle>
            <CardDescription>Important health notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
              <AlertCircle className="h-5 w-5 text-warning" />
              <div>
                <p className="font-medium">Prescription Refill</p>
                <p className="text-sm text-muted-foreground">Blood pressure medication due in 3 days</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Annual Physical</p>
                <p className="text-sm text-muted-foreground">Schedule your yearly checkup</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <Heart className="h-5 w-5 text-success" />
              <div>
                <p className="font-medium">Health Goal Achievement</p>
                <p className="text-sm text-muted-foreground">You've reached your exercise goal!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};