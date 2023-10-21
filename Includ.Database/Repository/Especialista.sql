SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Especialista](
	[Id] [varchar](36) NOT NULL,
	[TipoRegistroEspecialista] [varchar](20) NOT NULL,
	[RegistroEspecialista] [varchar](20) NOT NULL,
	[IdEspecialidade] [varchar](36) NOT NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
ALTER TABLE [dbo].[Especialista] ADD PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Especialista] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[Especialista]  WITH CHECK ADD FOREIGN KEY([IdEspecialidade])
REFERENCES [dbo].[Especialidade] ([Id])
GO
