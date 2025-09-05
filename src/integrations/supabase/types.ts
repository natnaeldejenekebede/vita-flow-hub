export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      analytics: {
        Row: {
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          ip_address: unknown | null
          referrer: string | null
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          referrer?: string | null
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
          referrer?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      certifications: {
        Row: {
          badge_url: string | null
          created_at: string
          credential_id: string | null
          credential_url: string | null
          description: string | null
          expiration_date: string | null
          id: string
          issue_date: string
          issuer: string
          name: string
          skills: string[] | null
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          badge_url?: string | null
          created_at?: string
          credential_id?: string | null
          credential_url?: string | null
          description?: string | null
          expiration_date?: string | null
          id?: string
          issue_date: string
          issuer: string
          name: string
          skills?: string[] | null
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          badge_url?: string | null
          created_at?: string
          credential_id?: string | null
          credential_url?: string | null
          description?: string | null
          expiration_date?: string | null
          id?: string
          issue_date?: string
          issuer?: string
          name?: string
          skills?: string[] | null
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          status: string
          subject: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          status?: string
          subject: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      education: {
        Row: {
          achievements: string[] | null
          created_at: string
          current: boolean
          degree: string
          description: string | null
          end_date: string | null
          field_of_study: string
          grade: string | null
          id: string
          institution: string
          location: string | null
          logo_url: string | null
          sort_order: number | null
          start_date: string
          updated_at: string
        }
        Insert: {
          achievements?: string[] | null
          created_at?: string
          current?: boolean
          degree: string
          description?: string | null
          end_date?: string | null
          field_of_study: string
          grade?: string | null
          id?: string
          institution: string
          location?: string | null
          logo_url?: string | null
          sort_order?: number | null
          start_date: string
          updated_at?: string
        }
        Update: {
          achievements?: string[] | null
          created_at?: string
          current?: boolean
          degree?: string
          description?: string | null
          end_date?: string | null
          field_of_study?: string
          grade?: string | null
          id?: string
          institution?: string
          location?: string | null
          logo_url?: string | null
          sort_order?: number | null
          start_date?: string
          updated_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          category: string
          created_at: string
          demo_url: string | null
          description: string
          end_date: string | null
          featured: boolean
          github_url: string | null
          id: string
          image_url: string | null
          impact: string | null
          long_description: string | null
          sort_order: number | null
          start_date: string | null
          status: string
          technologies: string[]
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          demo_url?: string | null
          description: string
          end_date?: string | null
          featured?: boolean
          github_url?: string | null
          id?: string
          image_url?: string | null
          impact?: string | null
          long_description?: string | null
          sort_order?: number | null
          start_date?: string | null
          status?: string
          technologies?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          demo_url?: string | null
          description?: string
          end_date?: string | null
          featured?: boolean
          github_url?: string | null
          id?: string
          image_url?: string | null
          impact?: string | null
          long_description?: string | null
          sort_order?: number | null
          start_date?: string | null
          status?: string
          technologies?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      skills: {
        Row: {
          category: string
          color: string | null
          created_at: string
          description: string | null
          featured: boolean
          icon_name: string | null
          id: string
          level: number
          name: string
          sort_order: number | null
          updated_at: string
          years_experience: number | null
        }
        Insert: {
          category: string
          color?: string | null
          created_at?: string
          description?: string | null
          featured?: boolean
          icon_name?: string | null
          id?: string
          level?: number
          name: string
          sort_order?: number | null
          updated_at?: string
          years_experience?: number | null
        }
        Update: {
          category?: string
          color?: string | null
          created_at?: string
          description?: string | null
          featured?: boolean
          icon_name?: string | null
          id?: string
          level?: number
          name?: string
          sort_order?: number | null
          updated_at?: string
          years_experience?: number | null
        }
        Relationships: []
      }
      timeline: {
        Row: {
          achievements: string[] | null
          company: string
          company_logo_url: string | null
          created_at: string
          current: boolean
          description: string
          end_date: string | null
          id: string
          location: string | null
          responsibilities: string[] | null
          sort_order: number | null
          start_date: string
          technologies: string[] | null
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          achievements?: string[] | null
          company: string
          company_logo_url?: string | null
          created_at?: string
          current?: boolean
          description: string
          end_date?: string | null
          id?: string
          location?: string | null
          responsibilities?: string[] | null
          sort_order?: number | null
          start_date: string
          technologies?: string[] | null
          title: string
          type?: string
          updated_at?: string
        }
        Update: {
          achievements?: string[] | null
          company?: string
          company_logo_url?: string | null
          created_at?: string
          current?: boolean
          description?: string
          end_date?: string | null
          id?: string
          location?: string | null
          responsibilities?: string[] | null
          sort_order?: number | null
          start_date?: string
          technologies?: string[] | null
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
