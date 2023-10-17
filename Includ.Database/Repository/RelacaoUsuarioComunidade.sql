SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RelacaoUsuarioComunidade](
	[Id] [varchar](36) NOT NULL,
	[IdUsuario] [varchar](36) NOT NULL,
	[IdComunidade] [varchar](36) NOT NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
ALTER TABLE [dbo].[RelacaoUsuarioComunidade] ADD PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RelacaoUsuarioComunidade] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[RelacaoUsuarioComunidade]  WITH CHECK ADD FOREIGN KEY([IdComunidade])
REFERENCES [dbo].[Comunidade] ([Id])
GO
ALTER TABLE [dbo].[RelacaoUsuarioComunidade]  WITH CHECK ADD FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
