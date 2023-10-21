SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comentario](
	[Id] [varchar](36) NOT NULL,
	[IdPost] [varchar](36) NULL,
	[AvaliacaoComentario] [int] NOT NULL,
	[VerificacaoComentario] [bit] NOT NULL,
	[CorpoComentario] [char](1) NOT NULL,
	[IdImagemComentario] [varchar](36) NOT NULL,
	[IdComunidade] [varchar](36) NOT NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
ALTER TABLE [dbo].[Comentario] ADD PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Comentario] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[Comentario] ADD  DEFAULT ((0)) FOR [AvaliacaoComentario]
GO
ALTER TABLE [dbo].[Comentario] ADD  DEFAULT ((0)) FOR [VerificacaoComentario]
GO
ALTER TABLE [dbo].[Comentario]  WITH CHECK ADD FOREIGN KEY([IdComunidade])
REFERENCES [dbo].[Comunidade] ([Id])
GO
ALTER TABLE [dbo].[Comentario]  WITH CHECK ADD FOREIGN KEY([IdImagemComentario])
REFERENCES [dbo].[Imagem] ([Id])
GO
ALTER TABLE [dbo].[Comentario]  WITH CHECK ADD FOREIGN KEY([IdPost])
REFERENCES [dbo].[Post] ([Id])
GO
