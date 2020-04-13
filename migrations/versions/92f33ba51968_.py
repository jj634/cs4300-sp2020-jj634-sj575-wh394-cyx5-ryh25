"""empty message

Revision ID: 92f33ba51968
Revises: 653013b57119
Create Date: 2020-04-13 01:38:06.203056

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '92f33ba51968'
down_revision = '653013b57119'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('jokes')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('jokes',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('created_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=True),
    sa.Column('updated_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=True),
    sa.Column('text', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('categories', postgresql.ARRAY(sa.TEXT()), autoincrement=False, nullable=True),
    sa.Column('score', sa.NUMERIC(precision=5, scale=0), autoincrement=False, nullable=True),
    sa.Column('maturity', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='jokes_pkey')
    )
    # ### end Alembic commands ###
