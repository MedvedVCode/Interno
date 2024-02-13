<template>
	<section class="counter">
		<div class="center">
			<ul class="counter__list">
				<li class="counter__item">
					<p class="counter__value">12</p>
					<p class="counter__description">years of experiance</p>
				</li>
				<li class="counter__item">
					<p class="counter__value">85</p>
					<p class="counter__description">success project</p>
				</li>
				<li class="counter__item">
					<p class="counter__value">15</p>
					<p class="counter__description">active project</p>
				</li>
				<li class="counter__item">
					<p class="counter__value">95</p>
					<p class="counter__description">happy customers</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	name: 'CounterComp',
};
</script>

<style lang="scss" scoped>
.counter {
  background-color: $accentBGColor;
  padding: 151px 0;
  &__list {
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__item {
    max-width: 25%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: relative;

    &:before {
      content: '';
      width: 1px;
      height: 130px;
      display: block;
      background-color: $accentColor;
      position: absolute;
      right: 0;
      bottom: 7px;
    }

    &:last-child::before {
      content: none;
    }
  }
  &__value {
    @include dmSerif(85px, 125%, 1.7px);
    color: $accentColor;
  }
  &__description {
    margin-top: 16px;
    color: $textColor;
    @include jost(22px, 400, 150%, 0.22px);
    text-transform: capitalize;
  }
}
</style>
