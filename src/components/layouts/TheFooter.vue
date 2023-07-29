<template>
        <footer>
      <div className="icons-footer">
        <a href="">
          <font-awesome-icon icon="square-facebook" />
        </a>
        <a href="">
          <font-awesome-icon icon="instagram" />
        </a>
      </div>
      <div className="copyright">© 2023 Emmanuel</div>
    </footer>
</template>

<style>
footer {
  background-color:  #62a5a1;
  color: #cdd6d6;
  min-height: 44px;
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
}
footer > .icons-footer svg {
  width: 32px;
  height: 32px;
  margin: 0 8px;
}
@media (min-width: 920px) {
  footer > .icons-footer svg {
    width: 40px;
    height: 40px;
  }
}

</style>